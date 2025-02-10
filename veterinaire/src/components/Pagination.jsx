export const Pagination=({ currentPage, totalPages, onPageChange })=> {
    return (
      <div className="flex items-center justify-center gap-2 mt-0">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 text-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed  hover:text-black"
        >
          Précédent
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 flex items-center justify-center rounded ${
              currentPage === page ? "bg-teal-700 text-white" : "text-gray-600 hover:bg-gray-100 hover:text-black"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed  hover:text-black"
        >
          Suivant
        </button>
      </div>
    )
  }
  
  