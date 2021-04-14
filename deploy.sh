rm -rf /dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit &&
git branch -M main &&
git remote add origin git@github.com:Nightlue2/cloud-ui-website.git &&
git push -f -u origin main &&
cd ..