# Get the AWS_BUCKET_NAME value as a variable $AWS_BUCKET_NAME
AWS_BUCKET_NAME=$(grep GATSBY_AWS_BUCKET_NAME .env.development | cut -d '=' -f2);
AWS_CLOUDFRONT_ID=$(grep GATSBY_AWS_CLOUDFRONT_ID .env.development | cut -d '=' -f2);

# Deploy the public directory.
npm run clean \
&& npm run build \
&& aws s3 rm s3://$AWS_BUCKET_NAME/ --recursive \
&& aws s3 sync public s3://$AWS_BUCKET_NAME/ --acl public-read