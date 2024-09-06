import { Trans } from '@lingui/macro'
import ExternalLink from 'components/ExternalLink'
import { ReactNode } from 'react'

const JB_FEE = 2.5

const JBDiscordLink = ({ children }: { children: ReactNode }) => (
  <ExternalLink href="https://discord.gg/6jXrJSyDFf">{children}</ExternalLink>
)

export default function QAs(): {
  id: string
  q: JSX.Element
  a?: JSX.Element
  type: 'user' | 'creator'
}[] {
  return [
    // QAs for Users
    {
      id: 'course-cost',
      q: <Trans>How much will a course cost?</Trans>,
      a: (
        <Trans>
          The cost of a course varies depending on the instructor and the course
          content. Please check the course details for specific pricing.
        </Trans>
      ),
      type: 'user',
    },
    {
      id: 'course-duration',
      q: <Trans>How long will a course be for?</Trans>,
      a: (
        <Trans>
          Course durations vary. Each course will have its duration listed in
          the course details.
        </Trans>
      ),
      type: 'user',
    },
    {
      id: 'course-access',
      q: <Trans>How do I access a course?</Trans>,
      a: (
        <Trans>
          Once you enroll in a course, you will receive access details via
          email. You can also access the course through your account dashboard.
        </Trans>
      ),
      type: 'user',
    },
    {
      id: 'meet-participants',
      q: <Trans>Will I get to meet other participants?</Trans>,
      a: (
        <Trans>
          Yes, there will be opportunities to interact with other participants
          through discussion forums and live sessions.
        </Trans>
      ),
      type: 'user',
    },
    {
      id: 'review-teacher',
      q: <Trans>Can I review the teacher?</Trans>,
      a: (
        <Trans>
          Yes, you can leave a review for the teacher after completing the
          course.
        </Trans>
      ),
      type: 'user',
    },
    {
      id: 'student-limit',
      q: <Trans>Is there a limit on the number of students per course?</Trans>,
      a: (
        <Trans>
          Some courses may have a limit on the number of students to ensure
          quality interaction. Please check the course details for specific
          limits.
        </Trans>
      ),
      type: 'user',
    },
    {
      id: 'in-person-course',
      q: <Trans>Is the course in person?</Trans>,
      a: (
        <Trans>
          Most courses are online, but some may offer in-person sessions. Please
          check the course details for more information.
        </Trans>
      ),
      type: 'user',
    },
    {
      id: 'miss-livestream',
      q: <Trans>What happens if I can't attend the course livestream?</Trans>,
      a: (
        <Trans>
          If you miss a livestream, a recording will usually be available for
          you to watch later.
        </Trans>
      ),
      type: 'user',
    },
    {
      id: 'course-accreditation',
      q: (
        <Trans>
          Are the courses accredited? How will my completion of the course be
          recognized e.g. by my employer?
        </Trans>
      ),
      a: (
        <Trans>
          Accreditation varies by course. Please check the course details for
          accreditation information. Completion certificates are provided for
          most courses.
        </Trans>
      ),
      type: 'user',
    },

    // QAs for Course Creators
    {
      id: 'teach-anything',
      q: <Trans>Can I really teach about anything?</Trans>,
      a: (
        <Trans>
          Yes, as long as the content adheres to our guidelines and policies.
        </Trans>
      ),
      type: 'creator',
    },
    {
      id: 'set-price',
      q: <Trans>How do I set a price for my course?</Trans>,
      a: (
        <Trans>
          Instructors can set their own prices based on the value and content of
          the course.
        </Trans>
      ),
      type: 'creator',
    },
    {
      id: 'target-funding',
      q: <Trans>What if I don't reach my target funding for my course?</Trans>,
      a: (
        <Trans>
          If you don't reach your target funding, you can either adjust your
          target or seek additional funding sources.
        </Trans>
      ),
      type: 'creator',
    },
    {
      id: 'school-money',
      q: <Trans>How does the School make money?</Trans>,
      a: (
        <Trans>
          The School takes a small fee from each course enrollment to cover
          operational costs.
        </Trans>
      ),
      type: 'creator',
    },
    {
      id: 'course-materials-help',
      q: (
        <Trans>
          Do I get help putting my course materials online and organizing the
          live feed?
        </Trans>
      ),
      a: (
        <Trans>
          Yes, we provide support to help you put your course materials online
          and organize live sessions.
        </Trans>
      ),
      type: 'creator',
    },
    {
      id: 'buy-token',
      q: (
        <Trans>
          Where can I buy the dEdu token to access the content creation page?
        </Trans>
      ),
      a: (
        <Trans>
          You can buy the dEdu token on our official website or through
          authorized exchanges.
        </Trans>
      ),
      type: 'creator',
    },
  ]
}
