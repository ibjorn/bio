'use client'

const ExternalIcon = ({
  color = '#ffffff',
  width = '24',
  height = '24',
  stroke = '1'
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      stroke={color}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={stroke}
        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
      ></path>
    </svg>
  )
}
export default ExternalIcon
