import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: "iq25c5jk",
    dataset: 'production',
    apiVersion: 'v1',
    token:"skUqfNiNoJehEQOVzBi3GMWseTSTHVBB5BxyQjExuVhjlK5cbbrD9l3jVp0ZHRB1bfxSIqg0flLhlg99n74fXrAw48nuBN2bteDOF4US5MYsQHNh2NlufZnhjmV7ku4kgymlUG8gDN5jhbalefte6RZ1i6iOQLMQsUXQ663gbSRswkShsPWA",
    useCdn: false,
    ignoreBrowserTokenWarning: true,
})
