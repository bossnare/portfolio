import { works } from '@/src/data/works';
import { Page } from '@/src/components/Page';
import { MaskedIcon } from '@/src/components/MaskedIcon';
import { OpenExternalLink } from '@/src/components/link';
import Link from 'next/link'

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const work = works.find((w) => w.id === id);

  return {
    title: work ? work.name : 'Work not found',
    description: work?.description,
  };
}

export default async function WorkPage({ params }: Props) {
  const { id } = await params;
  const work = works.find((w) => w.id === id);
  const othersWorks = works.filter((w) => w.id !== id)

  if (!work) return null;

  return (
    <Page>
      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <div
            style={{ backgroundColor: work.color }}
            className="flex items-center justify-center shrink-0 size-24 md:size-30 rounded-3xl md:rounded-4xl"
          >
            {work.personal && work.logoIcon ? (
              <MaskedIcon
                style={{ backgroundColor: work.textColor }}
                icon={work.logoIcon}
                className="size-18 md:size-24"
              />
            ) : (
              <span
                style={{ color: work.textColor }}
                className="font-semibold leading-4 text-center md:text-lg max-w-18 md:max-w-22 font-display"
              >
                {work.brandName}
              </span>
            )}
          </div>
          <div className="flex flex-col grow">
            <h1 className="pb-0 text-2xl font-semibold font-display">
              {work.brandName}
            </h1>
            <span className="font-medium text-primary">{work.category}</span>
            <span className="text-sm font-medium text-muted-foreground">
              {work.status}
            </span>

            <div className="md:flex hidden mt-5 overflow-x-auto text-nowrap gap-4 divide-x divide-border [&>*]:pr-4 max-w-3xl w-full">
              {work.metadata.map((info, i) => (
                <div
                  key={`${info}, ${i}`}
                  className="flex flex-col items-center gap-1"
                >
                  <ul className="flex gap-1 font-medium">
                    <li>{info.value.join(' | ')}</li>
                  </ul>
                  <span className="text-sm text-muted-foreground">
                    {info.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex md:hidden overflow-x-auto text-nowrap gap-4 divide-x divide-border [&>*]:pr-4 mt-2 max-w-3xl w-full">
          {work.metadata.map((info, i) => (
            <div
              key={`${info}, ${i}`}
              className="flex flex-col items-center gap-1"
            >
              <ul className="flex gap-1 text-sm font-medium">
                <li>{info.value.join(' | ')}</li>
              </ul>
              <span className="text-sm text-muted-foreground">
                {info.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        {work.personal && (
          <>
            <OpenExternalLink
              className="w-full transition h-10 font-medium rounded-full md:w-60 bg-primary hover:brightness-120 active:opacity-70 text-primary-foreground"
              href={work.link}
            >
              View work
            </OpenExternalLink>
            <OpenExternalLink
              className="w-full transition h-10 px-6 font-medium rounded-full md:w-fit group hover:text-foreground hover:bg-muted active:opacity-70 active:text-foreground text-primary"
              href={work.github}
            >
              <MaskedIcon
                className="size-4 bg-primary! group-hover:bg-foreground! group-active:bg-foreground!"
                icon={'github.svg'}
              />
              View on github
            </OpenExternalLink>
          </>
        )}
      </div>

      <div className="flex w-full gap-3 overflow-x-auto">
        {work.previews.map((preview, i) => (
          <div style={{backgroundColor: work.color}} key={i} className="rounded p-4 py-2 shrink-0 flex flex-col gap-3 items-center justify-center bg-linear-to-b from-transparent to-black/80 dark:to-white/80 h-120 w-70 md:w-[calc(100%/4-12px)]">
            <div className="flex flex-col text-center items-center">
              <span style={{color: work.textColor}} className="font-bold text-3xl font-display">{preview.title}</span>
              <span style={{color: work.textColor}} className="text-sm max-w-40 opacity-98">{preview.description}</span>
            </div> 
            <div style={{backgroundColor: work.textColor}} className="grow w-full rounded-sm"></div>
            {work.personal && work.logoIcon && <div className="text-white dark:text-black font-semibold font-display text-xs flex gap-1 items-center">
              <MaskedIcon icon={work.logoIcon} className="bg-white! dark:bg-black! size-3" />
              <span className="text-white dark:text-black font-semibold font-display text-xs">{work.brandName}</span>
            </div>}
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-8 pt-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="font-medium font-sans!">About this project</h2>
            <p className="font-medium text-muted-foreground max-w-lg text-lg">{work.description}</p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-medium font-sans!">Technologies</h2>
            <ul className="max-w-md flex gap-2 flex-wrap">
              {work.technologies.map((tech) => (
                <li key={tech} className="p-1 px-3 bg-muted">{tech}</li>
              ))}
            </ul>
          </div>
          <span className="text-primary">#{work.type}</span>
        </div>
        <div className="flex flex-col gap-5 max-w-lg w-full">
          <h2 className="font-medium font-sans!">Others projects</h2>
          <div className="flex gap-5 flex-wrap">
            {othersWorks.map((otherwork) => (
          <Link href={`/works/${otherwork.id}`} key={otherwork.id} className="flex flex-col cursor-pointer hover:bg-muted/70 dark:hover:bg-muted active:bg-primary/20 dark:active:bg-muted active:opacity-70 items-center gap-2">
                <div className="p-2 rounded-3xl bg-muted dark:bg-card">
                <div
            style={{ backgroundColor: otherwork.color }}
            className="flex items-center justify-center shrink-0 size-20 rounded-full"
          >
            {otherwork.personal && otherwork.logoIcon ? (
              <MaskedIcon
                style={{ backgroundColor: otherwork.textColor }}
                icon={otherwork.logoIcon}
                className="size-12"
              />
            ) : (
              <span
                style={{ color: otherwork.textColor }}
                className="font-semibold leading-4 text-center text-sm max-w-18 md:max-w-22 font-display"
              >
                {otherwork.brandName}
              </span>
            )}
          </div>
        </div>
        <span className="font-medium text-sm max-w-26 text-center">{otherwork.brandName}</span>
      </Link>
      ))}
      </div>
      </div>
      </div>
    </Page>
  );
}
