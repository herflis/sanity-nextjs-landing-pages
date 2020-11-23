export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fbbea88f918d4008e2fe033',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-e9rumiyr',
                  apiId: '3e37ff9b-3771-4f0b-b651-32e4c49246d1'
                },
                {
                  buildHookId: '5fbbea8860b25f008b1cb560',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-uaymvy33',
                  apiId: '07744682-38bc-490b-96fe-9691b68e340b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/herflis/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-uaymvy33.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
