import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { routes } from '@/config/index'
import { draftMode } from 'next/headers';

// https://<your-site>/api/preview?secret=<token>&slug=<path>
const preview = async (req: Request, res: NextApiResponse) => {
  // if (req.query.secret !== process.env.PREVIEW_SECRET) {
  //   return res.status(401).json({ message: 'Invalid token' })
  // }
  const searchParams  = req.url;

  const sp = new URL(`${routes.front.root}${searchParams}`);

  const url = sp.searchParams.get('url')

  const status = sp.searchParams.get('status')
  const slug = sp.searchParams.get('slug')


  console.log(sp);
  
  console.log('ssssp',url, status);

  const isPartner = searchParams.includes('partners')

  const isJournal = searchParams.includes('journal')
  
  // if (status === "published") {
  //   draftMode().disable();
  // } else {
  //   draftMode().enable();
  // }
  
  // if (status === "published") {
  //   draftMode().disable();
  // } else {
  //   draftMode().enable();
  // }
  // if(isPartner) {
    res.redirect(`${routes.front.journals}/${slug}` )

  // }
  // if(isJournal) {
  //   res.redirect(routes.front.journal)

  // }
}

export default preview
