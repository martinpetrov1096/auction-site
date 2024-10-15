if [ "$mode" = "dev" ]; then
   npm run dev
   exit;
else 
    npm run start
    exit;
fi

