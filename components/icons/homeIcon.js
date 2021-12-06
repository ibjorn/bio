export default function HomeIcon({
  width = '24',
  height = '24',
  stroke = '1'
}) {
  return (
    <svg
      //   className={sizeClasses}
      fill='none'
      stroke='currentColor'
      //   viewBox={`0 0 ${width} ${height}`}
      viewBox='0 0 24 24'
      width={width}
      height={height}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={stroke}
        d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
      ></path>
    </svg>
  )
}
