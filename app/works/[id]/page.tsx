import { works } from '@/src/data/works';
import { Page } from '@/src/components/Page';
import { MaskedIcon } from '@/src/components/MaskedIcon';
import { OpenExternalLink } from '@/src/components/link';

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
                  <ul className="flex gap-1">
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
        <div className="flex md:hidden overflow-x-auto text-nowrap gap-4 divide-x divide-border [&>*]:pr-4 max-w-3xl w-full">
          {work.metadata.map((info, i) => (
            <div
              key={`${info}, ${i}`}
              className="flex flex-col items-center gap-2"
            >
              <ul className="flex gap-1">
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
              className="w-full h-10 font-medium rounded-full md:w-60 bg-primary hover:brightness-120 active:opacity-70 text-primary-foreground"
              href={work.link}
            >
              View work
            </OpenExternalLink>
            <OpenExternalLink
              className="w-full h-10 px-6 font-medium rounded-full md:w-fit group hover:text-foreground hover:bg-muted active:opacity-70 active:text-foreground text-primary"
              href={work.link}
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
    </Page>
  );
}
