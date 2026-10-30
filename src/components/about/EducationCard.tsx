import type { Education } from '@/src/data/education';
import { Award } from 'lucide-react';

type EducationProps = {
  education: Education;
};

export function EducationCard({ education }: EducationProps) {
  return (
    <>
      <div className="text-sm font-medium text-muted-foreground">
        {education.period}
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-lg font-medium text-foreground">
              {education.title}
            </p>
            <p>{education.school}</p>
            <p className="text-sm text-muted-foreground">
              {education.description}
            </p>
          </div>

          <span className="inline-flex space-x-1 w-fit items-center rounded-md border border-border px-2.5 py-1 text-xs tracking-[0.08em] text-muted-foreground">
            <Award className="size-4 text-primary" />{' '}
            <span>{education.degree}</span>
          </span>
        </div>
      </div>
    </>
  );
}
