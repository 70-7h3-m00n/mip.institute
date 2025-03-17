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
import stls from '@/styles/pages/JournalSlug.module.sass'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getStaticPropsBlog } from '@/lib/handlers/getStaticPropsBlog'
import { getStaticPathsBlogs } from '@/lib/getStaticPaths/getStaticPathsBlog'
import routes from '@/config/routes'
import preview from '@/config/preview'
import prod from '@/config/prod'

const JournalSlugPage = ({ blog }) => {
  console.log(blog);
  
  const articleHeading = {
    studyField: blog?.studyField,
    picture: blog?.picture,
    title: blog?.title,
    teacher: blog?.teacher,
    blog_author: blog?.blog_author,
    date: blog?.date,
    readTime: blog?.readTime
  }

  const articleAuthors = [blog?.teacher, blog?.blog_author]

  const headingLinks = blog?.article?.filter(
    el => el.__component === "blog.subtitle"
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

  console.log(preview);
  

  return (
    <Wrapper>
      <SeoPagesJournal blog={blog} />
      <div className={stls.in}>
      <p>root2 {routes.back.rootv2 }</p>
      <p>root1 {routes.back.root}</p>
      <p>preview {String(preview)}</p>
      <p>prod {String(prod)}</p>
        <ReadingProgressbar />
        <Breadcrumbs isJournal journalSlug={blog?.studyFieldSlug} lastLabel={blog?.studyField}/>
        {articleHeading && <ArticleTitle props={articleHeading} />}
        <Accordion>
          <ArticleContentLinks props={headingLinks} />
        </Accordion>
        <article className={stls.article}>
          {blog?.article?.map((module, idx) => (
            <ArticlesDynamicZones key={idx} props={module} />
          ))}
          {blog?.teacher && <ArticleAuthors authors={articleAuthors} />}
          {blog?.blogs?.length > 0 && (
            <ArticleRelatedBlogs blogs={blog?.blogs} />
          )}
          <ButtonToTop />
        </article>
      </div>
    </Wrapper>
  )
}

export const getStaticPaths = async () =>
  await getStaticPathsBlogs()

export const getStaticProps: GetStaticProps = async context =>
  // @ts-ignore
  await getStaticPropsBlog({context})

export default JournalSlugPage
