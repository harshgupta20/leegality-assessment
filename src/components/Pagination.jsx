const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    siblingCount = 1,
}) => {
    if (totalPages <= 1) return null;

    const createPaginationRange = () => {
        const totalPageNumbers =
            siblingCount * 2 + 5;

        if (totalPages <= totalPageNumbers) {
            return Array.from(
                { length: totalPages },
                (_, index) => index + 1
            );
        }

        const leftSibling = Math.max(
            currentPage - siblingCount,
            1
        );

        const rightSibling = Math.min(
            currentPage + siblingCount,
            totalPages
        );

        const showLeftDots =
            leftSibling > 2;

        const showRightDots =
            rightSibling < totalPages - 1;

        const firstPage = 1;
        const lastPage = totalPages;

        if (!showLeftDots && showRightDots) {
            const leftRange = Array.from(
                {
                    length:
                        3 + siblingCount * 2,
                },
                (_, index) => index + 1
            );

            return [
                ...leftRange,
                "...",
                lastPage,
            ];
        }

        if (showLeftDots && !showRightDots) {
            const rightRange = Array.from(
                {
                    length:
                        3 + siblingCount * 2,
                },
                (_, index) =>
                    totalPages -
                    (3 + siblingCount * 2) +
                    index +
                    1
            );

            return [
                firstPage,
                "...",
                ...rightRange,
            ];
        }

        return [
            firstPage,
            "...",
            ...Array.from(
                {
                    length:
                        rightSibling -
                        leftSibling +
                        1,
                },
                (_, index) =>
                    leftSibling + index
            ),
            "...",
            lastPage,
        ];
    };

    const pages =
        createPaginationRange();

    const goToPage = (page) => {
        if (
            page < 1 ||
            page > totalPages ||
            page === currentPage
        )
            return;

        onPageChange(page);
    };

    return (
        <nav
            className="
        flex
        flex-wrap
        items-center
        justify-center
        gap-2
        mt-12
      "
            aria-label="Pagination Navigation"
        >
            {/* First */}
            <button
                onClick={() =>
                    goToPage(1)
                }
                disabled={currentPage === 1}
                className="
          px-3 py-2
          border
          border-gray-300
          text-gray-500
          rounded-xl
          disabled:opacity-40
          hover:bg-gray-100
          transition
        "
                aria-label="First Page"
            >
                First
            </button>

            {/* Previous */}
            <button
                onClick={() =>
                    goToPage(currentPage - 1)
                }
                disabled={currentPage === 1}
                className="
          px-3 py-2
          border
          border-gray-300
            text-gray-500
          rounded-xl
          disabled:opacity-40
          hover:bg-gray-100
          transition
        "
                aria-label="Previous Page"
            >
                Prev
            </button>

            {pages.map(
                (page, index) =>
                    page === "..." ? (
                        <span
                            key={`${page}-${index}`}
                            className="
                px-2
                text-gray-500
              "
                        >
                            ...
                        </span>
                    ) : (
                        <button
                            key={page}
                            onClick={() =>
                                goToPage(page)
                            }
                            aria-current={
                                currentPage === page
                                    ? "page"
                                    : undefined
                            }
                            className={`
                h-10
                min-w-[40px]
                px-3
                rounded-xl
                transition
                ${currentPage === page
                                    ? "bg-blue-600 text-white"
                                    : "border border-gray-300 text-gray-500 hover:bg-gray-100"
                                }
              `}
                        >
                            {page}
                        </button>
                    )
            )}

            {/* Next */}
            <button
                onClick={() =>
                    goToPage(currentPage + 1)
                }
                disabled={
                    currentPage === totalPages
                }
                className="
          px-3 py-2
          border
          border-gray-300
          text-gray-500
          rounded-xl
          disabled:opacity-40
          hover:bg-gray-100
          transition
        "
                aria-label="Next Page"
            >
                Next
            </button>

            {/* Last */}
            <button
                onClick={() =>
                    goToPage(totalPages)
                }
                disabled={
                    currentPage === totalPages
                }
                className="
          px-3 py-2
          border
          border-gray-300
            text-gray-500
          rounded-xl
          disabled:opacity-40
          hover:bg-gray-100
          transition
        "
                aria-label="Last Page"
            >
                Last
            </button>
        </nav>
    );
};

export default Pagination;