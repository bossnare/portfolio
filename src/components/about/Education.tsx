import {educations} from '@/src/data/education'
import {EducationCard} from './EducationCard'
import {DiplomaCard} from './DiplomaCard'

export function Education() {
return(
  <section className="flex flex-col items-start justify-center w-full min-h-screen gap-10 pb-10 md:pb-0 md:gap-10 md:items-center">
    <div className="space-y-5 md:text-center">
        <h3 className="max-w-md text-3xl">Education</h3>
        <p className="max-w-md text-sm text-muted-foreground">
          My academic background and training that shaped my path as a developer.
        </p>
    </div>
    <div className="flex flex-col md:flex-row md:items-center md:p-4 gap-4 w-full bg-muted dark:bg-muted/40">
        <div>
          <DiplomaCard />
        </div>
        {/* <div className="flex md:flex-col items-center md:justify-between h-full">
          <div className="flex md:flex-col items-center md:justify-between h-full">
            {Array.from({length: 3}).map((circle, i) => (
            <span key={i} className="bg-background p-1 border border-border/70 before:size-2 rounded-full flex before:bg-foreground before:rounded-full " />
          ))}
          </div>
          <span className="border-border h-full border-l"></span>
        </div> */}
        <div className="flex flex-col justify-between divide-y divide-border bg-background dark:bg-transparent grow">
          {
            educations.map((education) => (
              <article
            key={education.title}
            className="grid gap-4 pb-6 md:pb-2 items-center p-2 md:grid-cols-[160px_1fr] md:p-4"
          >
            <EducationCard education={education} />
          </article>
            ))
          }
        </div>
    </div>
  </section>
  )}
