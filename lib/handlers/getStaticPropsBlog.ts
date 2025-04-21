import revalidate from '@/config/revalidate'
import routes from '@/config/routes'
import axios from 'axios'
import qs from 'qs'

export const getStaticPropsBlog = async ({ context }) => {
  const queryString = qs.stringify(
    {
      filters: {
        slug: context?.params?.slug?.toString()
      },
      populate: {
        blogs: {
          fields: ['title', 'date', 'slug', 'studyField', 'studyFieldSlug', 'subtitle'],
          populate: {
            picture: {
              fields: ['url', 'width', 'height']
            }
          }
        },
        seo: {
          populate: '*'
        },
        blog_author: {
          fields: ['name']
        },
        picture: {
          fields: ['url', 'width', 'height']
        },
        article: {
          on: {
            'blog.table': {
              populate: {
                row: {
                  populate: ['record']
                }
              }
            },
            'blog.teacher-comment': {
              populate: '*'
            },
            'blog.subtitle': {
              populate: '*'
            },
            'blog.full-colored-text-block': {
              populate: '*'
            },
            'blog.text-block-with-bg': {
              populate: '*'
            },
            'shared.list-with-icon': {
              populate: '*'
            },
            'blog.single-image-block': {
              populate: '*'
            },
            'blog.comment-block': {
              populate: '*'
            },
            'blog.list-with-title': {
              populate: '*'
            },
            'blog.list-with-bg-and-title': {
              populate: '*'
            },
            'blog.related-programs': {
              populate: {
                programs: {
                  fields: ['title', 'url'],
                  populate: {
                    heroPicture: {
                      fields: ['url', 'width', 'height']
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    {
      encodeValuesOnly: true // Кодирует только значения
    }
  )

  try {
    const response = await axios.get(`${routes.back.rootv2}/api/blogs?${queryString}`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_BEARER}`
      }
    })

    const blog = response?.data?.data[0] || null

    if (!blog) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        blog
      },
      revalidate: revalidate.default
    }
  } catch (e) {
    return {
      notFound: true
    }
  }
}
