import { ThemeOption } from 'constants/theme/themeOption'
import { ThemeContext } from 'contexts/Theme/ThemeContext'
import Image from 'next/legacy/image'
import { useContext } from 'react'
import { twMerge } from 'tailwind-merge'
import DARK_DEDU_LOGO from '/public/assets/dedu-logo-p1.png'
import LIGHT_DEDU_LOGO from '/public/assets/dedu-logo-p2.png'

export default function Logo({
  className,
  themeOverride,
}: {
  className?: string
  themeOverride?: 'dark' | 'light'
}) {
  const { themeOption } = useContext(ThemeContext)

  const imgSrc =
    themeOverride === 'dark' || themeOption === ThemeOption.dark
      ? DARK_DEDU_LOGO
      : LIGHT_DEDU_LOGO

  if (!imgSrc) return null

  return (
    <div className={twMerge('relative flex w-36 md:w-36', className)}>
      <Image
        src={imgSrc}
        alt="Juicebox logo"
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </div>
  )
}
