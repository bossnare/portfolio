import type { Metadata } from 'next';
import {Page, PageHeader} from '@/src/components/Page'
import {FileText, Eye, ArrowDownToLine} from 'lucide-react'

export const metadata: Metadata = {
    title: "CV - Full-Stack Developer & Designer",
    description: "Download the CV of Christo Razafimanga, Full-Stack Web Developer and Designer specializing in React, TypeScript, NestJS and modern interface.",
    alternates: {
        canonical: "/cv"
    }
}

export default function CVPage () {
    const pdfs = [
        {
            name: "Dev_CV",
            pdfUrl: "/christo_razafimanga_cv.pdf"
        }
    ]

    return (<Page>
        <PageHeader startTitle="Curriculum" title="Vitae" />
        <main className="space-y-6">
            <div className="">
                <h2 className="text-xl font-medium font-sans!">Christo Razafimanga</h2>
                <p className="text-muted-foreground text-sm">Full-Stack Web Developer and Designer</p>
            </div>
            <div className="flex gap-4">
                {
                    pdfs.map((pdf) => (
                        <div key={pdf.name} className="bg-card dark:bg-transparent border border-border dark:border-background flex flex-col gap-3 shadow-sm pb-2">
                            <div className="flex justify-between items-center font-medium py-4 bg-background border-b border-muted p-4">
                                <span>{pdf.name}</span>
                                <FileText className="size-4"/>
                            </div>
                            <div className="flex gap-3 p-4 *:hover:bg-muted/80 *:active:bg-muted *:active:opacity-90">
                                <a href={pdf.pdfUrl} className="px-2 py-0.5 flex gap-2 items-center" target="_blank" rel="noopener noreferrer"><Eye className="size-4" /> View CV</a>
                                <a href={pdf.pdfUrl} download className="px-2 py-0.5 flex gap-2 items-center"><ArrowDownToLine className="size-4" /> Download CV</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </main>
    </Page>)
}