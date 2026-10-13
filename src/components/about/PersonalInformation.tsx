import { personalInfo } from '@/src/data/personal-info';
import Image from 'next/image';

export const PersonalInformation = () => {
  return (
    <section className="relative flex flex-col items-start justify-center w-full min-h-screen gap-10 md:gap-10 md:items-center">
      <span className="absolute top-0 w-1/4 border-t border-border" />

      <h3 className="max-w-md text-3xl">Personal Information</h3>
      <div className="flex flex-col justify-center gap-8 p-4 border divide-y rounded-lg bg-background md:items-center md:divide-x md:divide-y-0 md:flex-row divide-border border-border">
        <Image
          src="/images/id_photo.jpg"
          alt="id_photo"
          width={1200}
          height={1200}
          className="h-auto rounded-md w-50"
        />
        <div className="grid justify-between gap-8 pb-8 md:gap-12 md:pr-8 md:pb-0">
          {personalInfo.name.map((nameInfo) => (
            <div key={nameInfo.label} className="flex flex-col gap-3">
              <span className="text-muted-foreground">{nameInfo.label}</span>
              <span>{nameInfo.value}</span>
            </div>
          ))}
        </div>
        <div className="grid justify-between grid-cols-2 gap-8 md:gap-12">
          {personalInfo.data.map((info) => (
            <div className="flex flex-col gap-3" key={info.value}>
              <span className="text-muted-foreground">{info.label}</span>
              <span>{info.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
