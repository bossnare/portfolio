import {interests} from '@/src/data/interests'

export function BeyondCode() {
return(
  <section className="flex flex-col items-start justify-center w-full gap-8 pb-16 md:gap-10 md:items-center">
    <div className="space-y-5 md:text-center">
        <h3 className="max-w-md text-3xl">Beyond code / Interests</h3>
        <p className="max-w-md text-sm text-muted-foreground">
          I&apos;m more than a developer. Here are a few things that inspire me every day.
        </p>
    </div>

    <div className="flex flex-wrap gap-5">
        {interests.map((interest) => (
            <article key={interest.title} className="flex flex-col items-center gap-2">
                <div className="p-6 shadow-lg bg-secondary text-secondary-foreground dark:bg-muted/60 dark:text-foreground rounded-full">
                    <interest.icon className="size-10" />
                </div>
                <span className="font-medium">{interest.title}</span>
            </article>
        ))}
    </div>
  </section>
  )}