
const SkeletonCard = () => {
  return (
   <div className="bg-white rounded-xl  flex flex-col gap-2">
        <div className="animate-pulse bg-gray-200 rounded-full h-4 w-16"></div>
        <div className="animate-pulse bg-gray-200 rounded-full h-4 w-32"></div>
        <div className="animate-pulse bg-gray-200 rounded-full h-3 w-20"></div>
        <div className="animate-pulse bg-gray-200 rounded-full h-3 w-12"></div>
        
   </div>
  )
}

export default SkeletonCard