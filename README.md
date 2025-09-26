# This is the source code for the official ACM@UCI website! :D 

Updates as of Fall 2025:

We have a new website!
It's a bit more artsy and a bit more sectioned-out than the old one, but otherwise generally the same content.

Here's the technical details:

The website was built primarily using React (and React Router), Vite, Bootstrap-React (yay scss!) and Typescript. 

<p align="center">
  <img src="https://skillicons.dev/icons?i=ts,react,nodejs,git,html,css,bootstrap,vite,sass&perline=9" />
</p>

File/folder structure is pretty straightforward...
- separate files for each page (a home page and 5 sub pages)
- extra helper components
- images grouped by category (all located in the public directory)

On the backend, we're using Sanity as a content management system.
Basically you can login to Sanity's web interface (either straight through the website or by launching it locally through the terminal) and create/add/update "schema". Schema is effectively reusable components with fields (such as a post schema type with fields "username", "profile picture", and "age"). On Sanity, you can very simply add and update content and then fetch it through the frontend (so you can update the website without ever touching any source code). 

See this link for a tutorial on how to use Sanity: https://www.sanity.io/docs/sanity-studio-quickstart/setting-up-your-studio 

The website is currently being deployed on Vercel, with the domain name originating from Domain.com.

If you find a bug on the website, or wish to contribute to the website's development in any way, please send a message in the "acm-help-desk" channel on ACM's discord.

Thank you! :D 
