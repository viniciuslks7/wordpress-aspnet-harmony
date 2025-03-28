
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WordPressContent from "./WordPressContent";
import AspNetForm from "./AspNetForm";

const IntegrationDemo = () => {
  return (
    <section id="demo" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Integration Demo</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how WordPress and ASP.NET work together to create a powerful web application.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-800">The Integration Flow</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-lg font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Content Creation in WordPress</h4>
                  <p className="text-gray-700">
                    Authors and editors create content using the familiar WordPress interface.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-3 mr-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full text-lg font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">WordPress REST API</h4>
                  <p className="text-gray-700">
                    Content is exposed through the WordPress REST API endpoints.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-3 mr-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full text-lg font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">ASP.NET Processing</h4>
                  <p className="text-gray-700">
                    ASP.NET backend retrieves content, processes data, and handles business logic.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pink-100 rounded-full p-3 mr-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-pink-600 text-white rounded-full text-lg font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">User Experience</h4>
                  <p className="text-gray-700">
                    The frontend displays content and provides interactive features for users.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Tabs defaultValue="content" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="content">WordPress Content</TabsTrigger>
                <TabsTrigger value="form">ASP.NET Form</TabsTrigger>
              </TabsList>
              <TabsContent value="content" className="mt-4">
                <WordPressContent />
              </TabsContent>
              <TabsContent value="form" className="mt-4">
                <AspNetForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationDemo;
