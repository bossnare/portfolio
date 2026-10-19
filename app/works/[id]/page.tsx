import {works} from '@/src/data/works'
import {Page} from '@/src/components/Page'

export async function generateMetadata({params}: Props) {
    const {id} = await params
    const work = works.find((w) => w.id === Number(id))

    return {
        title: work ? work.name : "Work not found",
        description: work?.description
    }
}

export default async function WorkPage({params}: Props) {
    const {id} = await params
    const work = works.find((w) => w.id === Number(id))

    if (!work) return null

    return (
        <Page>
            <h1 className="text-3xl font-medium">{work.name}</h1>
            <p className="text-muted-foreground">{work.description}</p>
        </Page>
    )
}