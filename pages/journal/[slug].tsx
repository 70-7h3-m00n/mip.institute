import ArticleAuthors from '@/components/articles/ArticleAuthors'
import ArticleContentLinks from '@/components/articles/ArticleContentLinks'
import ArticleRelatedBlogs from '@/components/articles/ArticleRelatedBlogs'
import ArticlesDynamicZones from '@/components/articles/ArticlesDynamicZones'
import ArticleTitle from '@/components/articles/ArticleTitle'
import Accordion from '@/ui/Accordion'
import Breadcrumbs from '@/ui/Breadcrumbs'
import ReadingProgressbar from '@/ui/ReadingProgressbar'
import Wrapper from '@/ui/Wrapper'
import ButtonToTop from '@/components/sections/ButtonToTop'
import SeoPagesJournal from '@/components/seo/SeoPageJournal'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import stls from '@/styles/pages/JournalSlug.module.sass'
import { GetStaticPaths, GetStaticProps } from 'next'

const JournalSlugPage = ({ blog }) => {
  const articleHeading = {
    studyField: blog?.studyField,
    picture: blog?.picture,
    title: blog?.title,
    teacher: blog?.teacher,
    blogAuthor: blog?.blogAuthor,
    date: blog?.date,
    readTime: blog?.readTime
  }

  const articleAuthors = [blog?.teacher, blog?.blogAuthor]

  const headingLinks = blog?.article?.filter(
    el => el.__typename === 'ComponentBlogSubtitle'
  )

  const slug = ['', blog?.studyFieldSlug]

  const segments = ['journal', 'journal']

  const labels = ['Журнал', blog?.studyField]
  const breadcrumbs = segments.map((segment, index) => {
    const breadcrumb = {
      label: labels[index],
      path: '/' + segments[index],
      // path: '/' + segments.slice(0, index + 1).join('/'),
      slug: slug[index]
    }
    return breadcrumb
  })

  return (
    <Wrapper>
      <SeoPagesJournal blog={blog} />
      <div className={stls.in}>
        <ReadingProgressbar />
        <Breadcrumbs isJournal breadcrumbs={breadcrumbs} />
        {articleHeading && <ArticleTitle props={articleHeading} />}
        <Accordion>
          <ArticleContentLinks props={headingLinks} />
        </Accordion>
        <article className={stls.article}>
          {blog?.article?.map((module, idx) => (
            <ArticlesDynamicZones key={idx} props={module} />
          ))}
          {blog?.teacher && <ArticleAuthors authors={articleAuthors} />}
          {blog?.blogs.length > 0 && (
            <ArticleRelatedBlogs blogs={blog?.blogs} />
          )}
          <ButtonToTop />
        </article>
      </div>
    </Wrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.journal })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.journal })

export default JournalSlugPage
