import {GraduationCap, Award} from 'lucide-react'
import {educations} from '@/src/data/education'

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
        <div className="">
          <div className="w-full relative md:w-100 h-80 bg-card dark:bg-muted/60 flex flex-col justify-between gap-4 p-6">
            <span className="absolute top-2 left-3">
              <GraduationCap strokeWidth={1} className="size-20 text-muted-foreground" />
            </span>
            <div className="flex justify-center flex-col gap-2 items-center">
              <div className="rounded-full w-30 h-3.5 bg-muted"></div>
              <div className="rounded-full w-20 h-3 bg-muted"></div>
            </div>
            <div className="flex justify-center flex-col gap-4 items-center">
              {Array.from({length: 2}).map((box, bi) => (
                <div key={bi} className="w-1/2 grid grid-cols-4 gap-4">
                  {Array.from({length: 6}).map((children, ci) => (
                    <div key={ci} className="rounded-full h-3 bg-muted"></div>
                  ))}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6 items-center">
              {Array.from({length: 3}).map((box, i) => (
                <div key={i} className="bg-muted h-3 rounded-full"></div>
              ))}
            </div>
          </div>
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
            className="grid gap-4 pb-6 items-center p-2 md:grid-cols-[160px_1fr] md:p-4"
          >
            <div className="text-sm font-medium text-muted-foreground">
              {education.period}
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
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
