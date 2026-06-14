export type AITool = {
  id: string
  name: string
  tagline: string
  description: string
  category: string
  subcategory?: string
  logo: string
  website: string
  pricing: {
    free: boolean
    freePlan?: string
    paidPlans: { name: string; price: string; features: string[] }[]
  }
  features: string[]
  pros: string[]
  cons: string[]
  bestFor: string[]
  rating: number
  badge?: 'Best Overall' | 'Best Free' | 'Editor Pick' | 'Most Popular' | 'Best Value'
  tags: string[]
}

export const categories = [
  { id: 'writing', label: 'Writing & Text', emoji: '✍️' },
  { id: 'image', label: 'Image Generation', emoji: '🖼️' },
  { id: 'video', label: 'Video Editing', emoji: '🎥' },
  { id: 'research', label: 'Search & Research', emoji: '🔍' },
  { id: 'coding', label: 'Coding & Dev', emoji: '💻' },
  { id: 'audio', label: 'Music & Audio', emoji: '🎵' },
  { id: 'data', label: 'Data & Analytics', emoji: '📊' },
  { id: 'marketing', label: 'Email & Marketing', emoji: '📧' },
  { id: 'education', label: 'Education & Study', emoji: '📚' },
  { id: 'business', label: 'Business & Finance', emoji: '💰' },
  { id: 'design', label: 'Design & UI', emoji: '🎨' },
  { id: 'chatbot', label: 'General Chatbots', emoji: '🤖' },
  { id: 'productivity', label: 'Productivity', emoji: '⚡' },
  { id: 'social', label: 'Social Media', emoji: '📱' },
  { id: 'website', label: 'Website Builder', emoji: '🌐' },
]

export const aiTools: AITool[] = [
  // ─── WRITING & TEXT ───────────────────────────────────────────────
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    tagline: 'The world\'s most popular AI assistant',
    description: 'ChatGPT by OpenAI is the most widely used AI chatbot in the world. It can write emails, essays, code, answer complex questions, summarize documents, translate languages, and much more. With GPT-4o at its core, it delivers near-human quality responses across almost every task.',
    category: 'writing',
    logo: '🤖',
    website: 'https://chat.openai.com',
    pricing: {
      free: true,
      freePlan: 'Limited GPT-4o access, basic features',
      paidPlans: [
        { name: 'Plus', price: '$20/month', features: ['Unlimited GPT-4o', 'DALL-E image generation', 'Advanced data analysis', 'Custom GPTs'] },
        { name: 'Team', price: '$30/user/month', features: ['Everything in Plus', 'Team workspace', 'Admin controls'] },
        { name: 'Enterprise', price: 'Custom', features: ['Unlimited everything', 'SSO', 'Priority support'] },
      ],
    },
    features: ['Natural conversation', 'Code generation', 'Image generation (DALL-E)', 'File analysis', 'Web browsing', 'Custom GPTs', 'Voice mode', 'Plugin ecosystem'],
    pros: ['Best overall quality', 'Massive ecosystem', 'Free tier available', 'Excellent coding help', 'Continuous updates'],
    cons: ['Can hallucinate facts', 'Paid plan needed for best features', 'Sometimes too cautious', 'No real-time data on free tier'],
    bestFor: ['Content writers', 'Developers', 'Students', 'Business owners', 'General use'],
    rating: 4.8,
    badge: 'Most Popular',
    tags: ['writing', 'coding', 'general', 'openai', 'gpt4'],
  },
  {
    id: 'claude',
    name: 'Claude',
    tagline: 'The most thoughtful AI for complex tasks',
    description: 'Claude by Anthropic is known for its exceptional writing quality, nuanced reasoning, and safety-first approach. It excels at long document analysis, creative writing, and complex reasoning tasks. Claude 3.5 Sonnet is widely considered the best writing AI available.',
    category: 'writing',
    logo: '🧠',
    website: 'https://claude.ai',
    pricing: {
      free: true,
      freePlan: 'Limited messages per day',
      paidPlans: [
        { name: 'Pro', price: '$20/month', features: ['Priority access', '5x more usage', 'Early feature access', 'Projects'] },
        { name: 'Team', price: '$25/user/month', features: ['Everything in Pro', 'Team collaboration', 'Admin dashboard'] },
      ],
    },
    features: ['200K token context window', 'Excellent long-form writing', 'Document analysis', 'Code generation', 'Nuanced reasoning', 'Artifacts (live preview)', 'Projects memory'],
    pros: ['Best writing quality', 'Huge context window', 'Very accurate', 'Excellent for long docs', 'Honest and nuanced'],
    cons: ['No image generation', 'No voice mode', 'Fewer integrations than ChatGPT'],
    bestFor: ['Writers', 'Researchers', 'Lawyers', 'Students', 'Anyone needing long doc analysis'],
    rating: 4.8,
    badge: 'Editor Pick',
    tags: ['writing', 'research', 'coding', 'anthropic', 'claude3'],
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    tagline: 'Google\'s most capable AI, integrated everywhere',
    description: 'Google Gemini is Google\'s flagship AI model that integrates seamlessly with Gmail, Docs, Drive, and the entire Google ecosystem. Gemini 1.5 Pro offers a massive 1 million token context window, making it ideal for processing entire codebases or book-length documents.',
    category: 'writing',
    logo: '✨',
    website: 'https://gemini.google.com',
    pricing: {
      free: true,
      freePlan: 'Gemini 1.5 Flash, basic features',
      paidPlans: [
        { name: 'Advanced', price: '$19.99/month', features: ['Gemini 1.5 Pro', 'Google Workspace integration', '2TB storage', 'Priority support'] },
      ],
    },
    features: ['1M token context window', 'Google Workspace integration', 'Real-time web search', 'Image understanding', 'Code execution', 'Multi-modal input'],
    pros: ['Free and powerful', 'Best Google integration', 'Huge context window', 'Real-time search built-in', 'Great for coding'],
    cons: ['Privacy concerns (Google)', 'Less creative than Claude', 'Inconsistent quality'],
    bestFor: ['Google Workspace users', 'Developers', 'Researchers', 'Students'],
    rating: 4.5,
    badge: 'Best Free',
    tags: ['writing', 'google', 'research', 'coding'],
  },
  {
    id: 'jasper',
    name: 'Jasper AI',
    tagline: 'AI writing for marketing teams',
    description: 'Jasper is purpose-built for marketing teams and content creators. It offers 50+ writing templates for blog posts, ad copy, social media, emails, and more. With brand voice training, Jasper ensures all content matches your company tone.',
    category: 'writing',
    logo: '📝',
    website: 'https://jasper.ai',
    pricing: {
      free: false,
      paidPlans: [
        { name: 'Creator', price: '$49/month', features: ['1 user', '50+ templates', 'Brand voice', 'SEO mode'] },
        { name: 'Teams', price: '$125/month', features: ['3 users', 'Everything in Creator', 'Collaboration tools', 'API access'] },
      ],
    },
    features: ['50+ writing templates', 'Brand voice training', 'SEO optimization', 'Plagiarism checker', 'Multi-language support', 'Chrome extension'],
    pros: ['Best for marketing copy', 'Brand voice consistency', 'Great templates', 'Team collaboration'],
    cons: ['Expensive', 'No free plan', 'Less flexible than ChatGPT', 'Requires learning'],
    bestFor: ['Marketing teams', 'Content agencies', 'E-commerce brands', 'Bloggers'],
    rating: 4.3,
    tags: ['writing', 'marketing', 'copywriting', 'seo'],
  },
  {
    id: 'copyai',
    name: 'Copy.ai',
    tagline: 'Automate your marketing copy instantly',
    description: 'Copy.ai is a marketing-focused AI writing tool that specializes in short-form copy. From product descriptions to email subject lines, it generates persuasive copy in seconds using battle-tested marketing frameworks like AIDA and PAS.',
    category: 'writing',
    logo: '✏️',
    website: 'https://copy.ai',
    pricing: {
      free: true,
      freePlan: '2,000 words/month, 1 user',
      paidPlans: [
        { name: 'Pro', price: '$49/month', features: ['Unlimited words', '5 users', 'All templates', 'Priority support'] },
        { name: 'Team', price: '$249/month', features: ['Unlimited everything', '20 users', 'API access', 'Custom workflows'] },
      ],
    },
    features: ['90+ copywriting templates', 'Marketing frameworks (AIDA, PAS)', 'Blog wizard', 'Social media copy', 'Email sequences', 'Product descriptions'],
    pros: ['Easy to use', 'Great for beginners', 'Good free tier', 'Fast results', 'Many templates'],
    cons: ['Less creative than Claude', 'Repetitive on long content', 'Limited customization'],
    bestFor: ['Small business owners', 'E-commerce sellers', 'Social media managers', 'Freelancers'],
    rating: 4.2,
    tags: ['writing', 'copywriting', 'marketing'],
  },
  // ─── IMAGE GENERATION ─────────────────────────────────────────────
  {
    id: 'midjourney',
    name: 'Midjourney',
    tagline: 'The gold standard for AI art generation',
    description: 'Midjourney is widely considered the best AI image generator for artistic and creative work. It produces stunning, painterly images with incredible detail and aesthetic quality. Used by professional artists, designers, and filmmakers worldwide.',
    category: 'image',
    logo: '🎨',
    website: 'https://midjourney.com',
    pricing: {
      free: false,
      paidPlans: [
        { name: 'Basic', price: '$10/month', features: ['200 image generations', 'General commercial use', 'Discord access'] },
        { name: 'Standard', price: '$30/month', features: ['Unlimited relaxed generations', '15hr fast generation', 'Stealth mode'] },
        { name: 'Pro', price: '$60/month', features: ['Unlimited relaxed', '30hr fast', 'Stealth mode', 'Max upscale'] },
      ],
    },
    features: ['Photorealistic images', 'Artistic styles', 'Image variations', 'Upscaling', 'Style references', 'Character references', 'Video generation (v6)'],
    pros: ['Best image quality', 'Unique artistic style', 'Active community', 'Consistent results', 'Fast generation'],
    cons: ['No free plan', 'Discord-based (no website UI)', 'Learning curve for prompts', 'Cannot edit specific areas'],
    bestFor: ['Artists', 'Designers', 'Game developers', 'Film/TV production', 'Marketing creatives'],
    rating: 4.9,
    badge: 'Best Overall',
    tags: ['image', 'art', 'creative', 'design'],
  },
  {
    id: 'dalle3',
    name: 'DALL-E 3',
    tagline: 'OpenAI\'s most accurate image generator',
    description: 'DALL-E 3 by OpenAI excels at following complex text prompts with remarkable accuracy. Unlike other generators, it understands nuanced descriptions and renders text within images correctly. Integrated directly into ChatGPT Plus.',
    category: 'image',
    logo: '🖼️',
    website: 'https://openai.com/dall-e-3',
    pricing: {
      free: false,
      paidPlans: [
        { name: 'Via ChatGPT Plus', price: '$20/month', features: ['Unlimited DALL-E 3 generations', 'Editing tools', 'High resolution'] },
        { name: 'API', price: '$0.04-0.12/image', features: ['Pay per image', 'Commercial use', 'API integration'] },
      ],
    },
    features: ['Accurate prompt following', 'Text in images', 'Inpainting (editing)', 'Multiple styles', 'High resolution', 'Safety filters', 'ChatGPT integration'],
    pros: ['Most accurate prompt following', 'Can write text in images', 'Great for illustrations', 'Easy to use via ChatGPT', 'Consistent quality'],
    cons: ['Less artistic than Midjourney', 'No free standalone access', 'Style is more "stock photo"', 'Limited customization'],
    bestFor: ['Bloggers', 'Marketing teams', 'Educators', 'Product mockups', 'Illustrations'],
    rating: 4.6,
    tags: ['image', 'openai', 'illustration'],
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    tagline: 'The open-source image generator with unlimited control',
    description: 'Stable Diffusion is a free, open-source image generation model that you can run locally on your computer. With thousands of community-trained models and LoRAs, it offers unparalleled customization. Platforms like Automatic1111 and ComfyUI make it accessible.',
    category: 'image',
    logo: '🌊',
    website: 'https://stability.ai',
    pricing: {
      free: true,
      freePlan: 'Fully free if run locally',
      paidPlans: [
        { name: 'Stability AI API', price: '$0.002-0.04/image', features: ['Cloud generation', 'No GPU needed', 'Latest models'] },
      ],
    },
    features: ['Completely free', 'Run locally', 'Thousands of models', 'LoRA support', 'ControlNet', 'Inpainting', 'Img2Img', 'No censorship'],
    pros: ['Completely free', 'No censorship', 'Most customizable', 'Huge community', 'Runs offline'],
    cons: ['Technical setup required', 'Needs powerful GPU', 'Steep learning curve', 'Inconsistent quality'],
    bestFor: ['Developers', 'Power users', 'Artists wanting full control', 'NSFW content creators', 'Researchers'],
    rating: 4.4,
    tags: ['image', 'open-source', 'free', 'local'],
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    tagline: 'Commercial-safe AI images for professionals',
    description: 'Adobe Firefly is built into Adobe\'s Creative Cloud suite and trained exclusively on licensed content, making it 100% safe for commercial use. It integrates directly into Photoshop, Illustrator, and Premiere Pro.',
    category: 'image',
    logo: '🦋',
    website: 'https://firefly.adobe.com',
    pricing: {
      free: true,
      freePlan: '25 generative credits/month',
      paidPlans: [
        { name: 'Firefly Premium', price: '$4.99/month', features: ['100 credits/month', 'Commercial use', 'Priority generation'] },
        { name: 'Creative Cloud', price: '$54.99/month', features: ['All Adobe apps', '1000 credits', 'Full commercial license'] },
      ],
    },
    features: ['Commercial-safe images', 'Photoshop Generative Fill', 'Text effects', 'Vector generation', 'Structure reference', 'Style reference', 'Adobe ecosystem integration'],
    pros: ['100% commercial safe', 'Photoshop integration', 'Professional quality', 'No copyright issues', 'Great text effects'],
    cons: ['Credit-based system', 'Less creative than Midjourney', 'Expensive full suite', 'Limited styles'],
    bestFor: ['Professional designers', 'Marketing agencies', 'Adobe Creative Cloud users', 'Commercial projects'],
    rating: 4.4,
    tags: ['image', 'adobe', 'commercial', 'design'],
  },
  {
    id: 'canva-ai',
    name: 'Canva AI',
    tagline: 'Design + AI for everyone',
    description: 'Canva AI supercharges the world\'s most popular design tool with AI capabilities. Magic Studio includes AI image generation, background removal, text-to-image, Magic Write for copy, and AI-powered video generation.',
    category: 'image',
    logo: '🎭',
    website: 'https://canva.com',
    pricing: {
      free: true,
      freePlan: 'Limited AI features, basic templates',
      paidPlans: [
        { name: 'Pro', price: '$14.99/month', features: ['Full Magic Studio', 'Brand kit', '1TB storage', 'Background remover'] },
        { name: 'Teams', price: '$29.99/month', features: ['Everything in Pro', 'Team features', 'Admin controls'] },
      ],
    },
    features: ['Text to image', 'Magic Write (AI copy)', 'Background removal', 'AI video generation', 'Magic Eraser', 'Dream Lab', 'Brand kit', '100M+ templates'],
    pros: ['Best for non-designers', 'All-in-one platform', 'Great templates', 'Easy collaboration', 'Mobile app'],
    cons: ['Less powerful than dedicated image AI', 'Limited creative control', 'Can look "Canva-ish"'],
    bestFor: ['Social media managers', 'Small businesses', 'Non-designers', 'Marketers', 'Students'],
    rating: 4.6,
    badge: 'Best Value',
    tags: ['image', 'design', 'marketing', 'social-media'],
  },
  // ─── VIDEO EDITING ────────────────────────────────────────────────
  {
    id: 'runway',
    name: 'Runway ML',
    tagline: 'Hollywood-grade AI video generation',
    description: 'Runway is the leading AI video generation platform used by professional filmmakers and content creators. Gen-3 Alpha produces cinematic quality video from text or image prompts. Used in major film productions.',
    category: 'video',
    logo: '🎬',
    website: 'https://runwayml.com',
    pricing: {
      free: true,
      freePlan: '125 one-time credits',
      paidPlans: [
        { name: 'Standard', price: '$15/month', features: ['625 credits/month', '5 video projects', 'HD export'] },
        { name: 'Pro', price: '$35/month', features: ['2250 credits/month', 'Unlimited projects', '4K export', 'Custom AI training'] },
        { name: 'Unlimited', price: '$95/month', features: ['Unlimited generation', 'All features', 'Priority queue'] },
      ],
    },
    features: ['Text to video', 'Image to video', 'Video to video', 'Background removal', 'Motion brush', 'Director mode', 'Green screen', '4K upscaling'],
    pros: ['Best video quality', 'Professional features', 'Hollywood adoption', 'Regular updates', 'Creative control'],
    cons: ['Expensive for heavy use', 'Credit system complex', 'Short video clips only', 'Learning curve'],
    bestFor: ['Filmmakers', 'Content creators', 'Advertisers', 'Music video producers', 'Studios'],
    rating: 4.7,
    badge: 'Best Overall',
    tags: ['video', 'ai-video', 'creative', 'filmmaking'],
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    tagline: 'Create AI avatar videos without a camera',
    description: 'Synthesia lets you create professional videos with AI avatars and synthetic voices. Just type your script and choose an avatar — no camera, actors, or studio needed. Used by 50,000+ companies for training and marketing videos.',
    category: 'video',
    logo: '👤',
    website: 'https://synthesia.io',
    pricing: {
      free: true,
      freePlan: '3 minutes/month demo',
      paidPlans: [
        { name: 'Starter', price: '$29/month', features: ['10 min video/month', '90+ avatars', 'Custom avatar'] },
        { name: 'Creator', price: '$89/month', features: ['30 min video/month', 'Priority support', 'Remove watermark'] },
        { name: 'Enterprise', price: 'Custom', features: ['Unlimited', 'Custom avatars', 'API', 'SSO'] },
      ],
    },
    features: ['160+ AI avatars', '130+ languages', 'Custom avatar creation', 'Screen recording', 'Slide import', 'Brand kit', 'API access'],
    pros: ['No camera needed', 'Multilingual support', 'Professional look', 'Easy to update videos', 'Great for training content'],
    cons: ['Avatars look artificial', 'Expensive', 'Limited creativity', 'Short clips'],
    bestFor: ['Corporate training', 'E-learning', 'Product demos', 'HR departments', 'Marketing teams'],
    rating: 4.4,
    tags: ['video', 'avatar', 'corporate', 'e-learning'],
  },
  {
    id: 'pictory',
    name: 'Pictory',
    tagline: 'Turn articles into videos in minutes',
    description: 'Pictory automatically converts blog posts, scripts, or long-form content into engaging short videos. It finds relevant stock footage, adds captions, and creates professional videos perfect for social media.',
    category: 'video',
    logo: '📹',
    website: 'https://pictory.ai',
    pricing: {
      free: true,
      freePlan: '3 video projects trial',
      paidPlans: [
        { name: 'Starter', price: '$19/month', features: ['30 videos/month', '10 min max length', '3M+ stock media'] },
        { name: 'Professional', price: '$39/month', features: ['60 videos/month', '20 min max', 'Custom fonts', 'Brand kit'] },
      ],
    },
    features: ['Blog to video', 'Script to video', 'Auto captions', 'Stock footage library', 'AI voiceover', 'Highlights extraction', 'Social media formats'],
    pros: ['Very easy to use', 'Great for repurposing content', 'Good stock library', 'Auto captions', 'Affordable'],
    cons: ['Videos look generic', 'Limited creative control', 'Stock footage quality varies', 'No AI video generation'],
    bestFor: ['Bloggers', 'YouTubers', 'Social media managers', 'Content marketers', 'Podcasters'],
    rating: 4.2,
    tags: ['video', 'content-repurposing', 'social-media'],
  },
  // ─── SEARCH & RESEARCH ───────────────────────────────────────────
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    tagline: 'The AI answer engine that cites its sources',
   
