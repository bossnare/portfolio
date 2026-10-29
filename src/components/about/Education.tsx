import {GraduationCap, Award} from 'lucide-react'
import {educations} from '@/src/data/education'

export function Education() {
return(
  <section className="flex flex-col items-start justify-center w-full min-h-screen gap-10 md:gap-10 md:items-center">
    <div className="space-y-5 md:text-center">
        <h3 className="max-w-md text-3xl">Education</h3>
        <p className="max-w-md text-sm text-muted-foreground">
          My academic background and training that shaped my path as a developer.
        </p>
    </div>
    <div className="flex flex-col md:flex-row gap-4 w-full bg-muted dark:bg-muted/40">
        <div className="">
          <GraduationCap strokeWidth={1} className="size-80 text-muted-foreground" />
        </div>
        {/* <div className="flex md:flex-col items-center md:justify-between h-full">
          <div className="flex md:flex-col items-center md:justify-between h-full">
            {Array.from({length: 3}).map((circle, i) => (
            <span key={i} className="bg-background p-1 border border-border/70 before:size-2 rounded-full flex before:bg-foreground before:rounded-full " />
          ))}
          </div>
          <span className="border-border h-full border-l"></span>
        </div> */}
        <div className="flex flex-col justify-between divide-y divide-border grow">
          {
            educations.map((education) => (
              <article
            key={education.title}
            className="grid gap-5 items-center p-2 md:grid-cols-[160px_1fr] md:p-4"
          >
            <div className="text-sm font-medium text-muted-foreground">
              {education.period}
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                  <p className="text-lg font-medium text-foreground">
                    {education.title}
                  </p>
                  <p>
                    {education.school}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {education.description}
                  </p>
                </div>

                <span className="inline-flex space-x-1 w-fit items-center rounded-md border border-border px-2.5 py-1 text-xs tracking-[0.08em] text-muted-foreground">
                  <Award className="size-4 text-primary" /> <span>{education.degree}</span>
                </span>
              </div>
            </div>
          </article>
            ))
          }
        </div>
    </div>
  </section>
  )}
