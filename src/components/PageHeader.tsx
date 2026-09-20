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