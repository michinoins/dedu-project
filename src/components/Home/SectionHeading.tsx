import { twMerge } from 'tailwind-merge'

export const SectionHeading: React.FC<
  React.PropsWithChildren<{
    className?: string
    headingClassName?: string
    heading: string | JSX.Element
    subheading?: string | JSX.Element
    topPadding?: string
  }>
> = ({ className, headingClassName, heading, subheading, topPadding = 'pt-0' }) => {
  return (
    <div className={twMerge(`mx-auto mb-16 max-w-3xl ${topPadding}`, className)}>
      <h2
        className={twMerge(
          'text-primary mb-0 pb-6 text-center text-3xl leading-tight md:text-5xl',
          headingClassName,
        )}
      >
        {heading}
      </h2>
      <p className="text-center text-lg text-grey-700 dark:text-slate-200">
        {subheading}
      </p>
    </div>
  )
}
