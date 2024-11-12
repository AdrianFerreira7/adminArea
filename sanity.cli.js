import {defineCliConfig} from 'sanity/cli'
import imageUrlBuilder from '@sanity/image-url';

export default defineCliConfig({
  api: {
    projectId: 'uzgfgx3m',
    dataset: 'production'
  },

  const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
