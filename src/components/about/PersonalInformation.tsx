import { personalInfo } from '@/src/data/personal-info';

export const PersonalInformation = () => {
  return (
    <section className="relative flex flex-col items-start justify-center w-full min-h-screen gap-8 md:gap-10 md:items-center">
      <span className="absolute top-0 w-1/4 border-t border-border" />

      <h3 className="max-w-md text-3xl">Personal Information</h3>
      <div className="flex flex-col justify-between w-full gap-6 divide-y md:divide-x md:divide-y-0 md:flex-row divide-border">
        <div className="flex flex-col gap-10 pb-8 md:pr-50">
          {personalInfo.name.map((nameInfo) => (
            <div key={nameInfo.label} className="flex flex-col gap-3">
              <span className="text-muted-foreground">{nameInfo.label}</span>
              <span className="font-medium md:text-xl">{nameInfo.value}</span>
            </div>
          ))}
        </div>
        <div className="grid justify-between grid-cols-2 gap-10 pt-4 md:w-1/2 md:pt-0 md:pl-4">
          {personalInfo.data.map((info) => (
            <div className="flex flex-col gap-3" key={info.value}>
              <span className="text-muted-foreground">{info.label}</span>
              <span className="text-lg">{info.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
