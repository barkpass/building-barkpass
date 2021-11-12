import Layout from './Layout';

export default function LoadingFallback() {
  return (
    <Layout>
      <div className="text-center mt-20 mb-40 h-screen text-gray-400">
        Loading...
      </div>
    </Layout>
  );
}
