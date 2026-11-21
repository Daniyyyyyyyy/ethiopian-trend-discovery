import { notFound } from "next/navigation";
import { getSql } from "@/lib/db";

type Blueprint = {
  title: string; summary: string; category: string; lifecycle: string; language: string | null;
  region: string | null; tiktok_url: string | null; creator_handle: string | null;
  hook: string | null; steps: unknown; props: string[] | null; camera_notes: string | null;
  edit_notes: string | null; caption_example: string | null; hashtags: string[] | null;
  translation_notes: string | null;
};

async function getBlueprint(slug: string): Promise<Blueprint | null> {
  const sql = getSql();
  if (!sql) return null;
  const rows = await sql`SELECT t.title,t.summary,t.category,t.lifecycle,t.language,t.region,
    v.tiktok_url,v.creator_handle,b.hook,b.steps,b.props,b.camera_notes,b.edit_notes,
    b.caption_example,b.hashtags,b.translation_notes
    FROM trends t
    JOIN blueprints b ON b.trend_id=t.id AND b.published=true
    LEFT JOIN trend_videos v ON v.trend_id=t.id AND v.is_primary=true
    WHERE t.slug=${slug} AND t.status='published' LIMIT 1`;
  return (rows[0] as unknown as Blueprint) || null;
}

export default async function TrendDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trend = await getBlueprint(slug);
  if (!trend) notFound();
  const steps = Array.isArray(trend.steps) ? trend.steps : [];
  return <main className="detail-wrap">
    <a className="back-link" href="/">← Back to discovery</a>
    <div className="detail-kicker">{trend.category} · {trend.lifecycle}</div>
    <h1>{trend.title}</h1><p className="detail-lead">{trend.summary}</p>
    <div className="detail-meta"><span>{trend.language || "Language not specified"}</span><span>{trend.region || "Region not verified"}</span>{trend.creator_handle && <span>Creator: {trend.creator_handle}</span>}</div>
    {trend.tiktok_url && <a className="button" href={trend.tiktok_url} target="_blank" rel="noreferrer">Watch original TikTok ↗</a>}
    <section className="blueprint-panel"><div className="eyebrow">CREATOR RECREATION BLUEPRINT</div>
      {trend.hook && <div className="blueprint-block"><h2>The hook</h2><p>{trend.hook}</p></div>}
      <div className="blueprint-block"><h2>How to recreate it</h2>{steps.length ? <ol>{steps.map((step,index)=><li key={index}>{typeof step === "string" ? step : JSON.stringify(step)}</li>)}</ol> : <p>Step-by-step instructions are being prepared.</p>}</div>
      {trend.props?.length ? <div className="blueprint-block"><h2>Props & preparation</h2><p>{trend.props.join(" · ")}</p></div> : null}
      {trend.camera_notes && <div className="blueprint-block"><h2>Camera notes</h2><p>{trend.camera_notes}</p></div>}
      {trend.edit_notes && <div className="blueprint-block"><h2>Editing notes</h2><p>{trend.edit_notes}</p></div>}
      {trend.translation_notes && <div className="blueprint-block"><h2>Language & context</h2><p>{trend.translation_notes}</p></div>}
      {trend.caption_example && <div className="blueprint-block"><h2>Caption idea</h2><p>{trend.caption_example}</p></div>}
      {trend.hashtags?.length ? <div className="blueprint-block"><h2>Hashtags</h2><p>{trend.hashtags.map(tag=>tag.startsWith("#")?tag:"#"+tag).join(" ")}</p></div> : null}
    </section>
    <p className="detail-footnote">Use this guide as inspiration, credit the original creator and adapt the format to your own audience. Trend performance is never guaranteed.</p>
  </main>;
}
