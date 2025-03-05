import Link from 'next/link'
import { ArticleSubtitleType } from './ArticleSubtitle'

const ArticleOneContentLink = ({ props }: ArticleSubtitleType) => {

  return (
    <li>
      <Link href={`#${props.subtitleSlug}`} passHref>
        <p>{props?.subtitle?.[0].children.map(el => (
          <span key={el.text}>{el.text}</span>

        ))}</p>
      </Link>
    </li>
  )
}

export default ArticleOneContentLink
