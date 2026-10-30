import { works } from '@/src/data/works';
import { Page } from '@/src/components/Page';
import { MaskedIcon } from '@/src/components/MaskedIcon';
import { OpenExternalLink } from '@/src/components/link';
import Link from 'next/link'
import {ArrowRight} from 'lucide-react'

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
              className="flex flex-col items-center gap-2"
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
              className="w-full relative h-10 font-medium rounded-full md:w-60 bg-primary hover:brightness-120 active:opacity-70 text-primary-foreground"
              href={work.link}
            >
              View work <span className="p-1 bg-primary-foreground text-foreground rounded-full absolute right-2">
                    <ArrowRight className="size-5" />
              </span>
            </OpenExternalLink>
            <OpenExternalLink
              className="w-full h-10 px-6 font-medium rounded-full md:w-fit group hover:text-foreground hover:bg-muted active:opacity-70 active:text-foreground text-primary"
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
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded bg-muted h-80 w-70"></div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-start w-full gap-8 md:gap-8 pt-2">
        <div className="space-y-4">
          <div className="space-y-3">
            <h2 className="font-medium font-sans! text-lg">About this project</h2>
            <p className="font-medium text-muted-foreground max-w-lg text-xl">{work.description}</p>
          </div>
          <div className="space-y-3">
            <h2 className="font-medium font-sans! text-lg">Technologies</h2>
            <ul className="max-w-md flex gap-2 flex-wrap">
              {work.technologies.map((tech) => (
                <li key={tech} className="p-1 px-3 bg-muted font-medium">{tech}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
        <div className="space-y-5 min-w-lg">
          <h2 className="font-medium font-sans! text-lg">Others projects</h2>
          <div className="flex gap-5">
            {othersWorks.map((other) => (
              <Link href={`/works/${other.id}`} key={other.id} className="flex flex-col cursor-pointer hover:bg-muted active:bg-muted active:opacity-60 items-center gap-2">
                <div className="p-2 rounded-3xl bg-muted">
                <div
            style={{ backgroundColor: other.color }}
            className="flex items-center justify-center shrink-0 size-20 rounded-full"
          >
            {other.personal && other.logoIcon ? (
              <MaskedIcon
                style={{ backgroundColor: other.textColor }}
                icon={other.logoIcon}
                className="size-12"
              />
            ) : (
              <span
                style={{ color: other.textColor }}
                className="font-semibold leading-4 text-center text-sm max-w-18 md:max-w-22 font-display"
              >
                {other.brandName}
              </span>
            )}
          </div>
              </div>
              <span className="font-semibold text-sm max-w-26 text-center">{other.brandName}</span>
              </Link>
            ))}
          </div>
        </div>
        </div>
      </div>
    </Page>
  );
}
