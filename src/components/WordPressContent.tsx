
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
}

const WordPressContent = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching WordPress posts
    const timer = setTimeout(() => {
      const mockPosts: Post[] = [
        {
          id: 1,
          title: "Getting Started with Headless WordPress",
          excerpt: "Learn how to set up WordPress as a headless CMS for your ASP.NET application.",
          date: "2023-09-15",
          author: "John Doe",
        },
        {
          id: 2,
          title: "Optimizing WordPress REST API Performance",
          excerpt: "Tips and tricks to ensure your WordPress API endpoints perform well at scale.",
          date: "2023-08-22",
          author: "Jane Smith",
        },
        {
          id: 3,
          title: "Custom Post Types in Headless WordPress",
          excerpt: "How to create and expose custom post types through the WordPress REST API.",
          date: "2023-07-10",
          author: "Alex Johnson",
        },
      ];
      setPosts(mockPosts);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
        </div>
        <h3 className="text-xl font-bold">WordPress Content</h3>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader className="pb-2">
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-4 w-1/4" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-4/5" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-4 w-1/3" />
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <CardDescription>By {post.author} on {new Date(post.date).toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.excerpt}</p>
              </CardContent>
              <CardFooter className="pt-2 text-sm text-blue-600 font-medium">
                <a href="#" className="hover:underline">Read more</a>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default WordPressContent;
