import { Download } from 'lucide-react'
import { useState } from 'react'
import { WindowWrapper } from '../window-wrapper'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export function Resume() {
  const [numPages, setNumPages] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setLoading(false)
  }

  function onDocumentLoadError(error: Error) {
    setError(error.message)
    setLoading(false)
  }

  return (
    <WindowWrapper
      windowType="resume"
      title="Resume"
      defaultWidth={900}
      defaultHeight={700}
      minWidth={600}
      minHeight={500}
      headerContent={
        <div className="flex flex-1 items-center justify-between space-x-4">
          <h2 className="text-center flex-1 text-sm font-semibold text-gray-700">
            Resume.pdf
          </h2>
          <a
            href="/files/resume.pdf"
            className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg transition-colors"
            title="Download Resume"
            download
          >
            <Download className="w-5 h-5 text-gray-600" />
          </a>
        </div>
      }
    >
      <div className="h-full w-full overflow-auto bg-gray-100">
        {loading && (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-2" />
              <p className="text-gray-600">Loading PDF...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="h-full flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-red-600 font-semibold mb-2">
                Failed to load PDF
              </p>
              <p className="text-gray-600 text-sm">{error}</p>
            </div>
          </div>
        )}

        {!error && (
          <Document
            file="/files/resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            className="w-full h-full flex flex-col items-center py-4"
            loading=""
          >
            {Array.from(new Array(numPages), (_, index) => (
              <div key={`page_${index + 1}`} className="mb-4">
                <Page
                  pageNumber={index + 1}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  width={Math.min(850, window.innerWidth - 100)}
                  className="shadow-lg"
                />
              </div>
            ))}
          </Document>
        )}
      </div>
    </WindowWrapper>
  )
}
