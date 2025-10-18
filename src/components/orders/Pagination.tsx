import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface PaginationProps {
  currentPage: number
  totalPages: number
  totalItems: number
  onPageChange: (page: number) => void
}

export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  // Show a subset of pages around the current page
  const visiblePages = pages.filter((page) => {
    if (totalPages <= 7) return true
    if (page === 1 || page === totalPages) return true
    if (page >= currentPage - 1 && page <= currentPage + 1) return true
    return false
  })

  return (
    <div className="flex items-center justify-between">
      <p className="text-sm text-muted-foreground">
        Showing {totalItems > 0 ? (currentPage - 1) * 10 + 1 : 0} to{' '}
        {Math.min(currentPage * 10, totalItems)} of {totalItems} results
      </p>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex gap-1">
          {visiblePages.map((page, index) => {
            const prevPage = visiblePages[index - 1]
            const showEllipsis = prevPage && page - prevPage > 1

            return (
              <div key={page} className="flex items-center gap-1">
                {showEllipsis && (
                  <span className="px-2 text-muted-foreground">...</span>
                )}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant={currentPage === page ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => onPageChange(page)}
                    className={cn(
                      'h-9 w-9',
                      currentPage === page && 'pointer-events-none'
                    )}
                  >
                    {page}
                  </Button>
                </motion.div>
              </div>
            )
          })}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

