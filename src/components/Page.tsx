import {cn} from '@/src/lib/utils'

type PageProps = React.ComponentProps<'div'>;

export const Page = ({className, children, ...props}: PageProps) => {
    return <div className={cn("w-full max-w-6xl px-4 mx-auto space-y-6 md:pt-14 md:px-0", className)} {...props}>{children}</div>
}

export function PageHeader({title="Title", description='This is the description'}: {title?: string; description?: string}) {
    return(
        <div className="space-y-4">
        <h1 className="px-2 border rounded-sm w-fit border-zinc-200 dark:border-white/12 text-muted-foreground">
          {title}
        </h1>
        <p className="max-w-2xl text-2xl font-semibold">
          {description}
        </p>
      </div>
    )
}