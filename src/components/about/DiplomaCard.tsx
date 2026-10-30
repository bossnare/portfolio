import {GraduationCap} from 'lucide-react'

export function  DiplomaCard() {
    return(
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
    )
}