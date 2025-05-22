export default function Collaboration() {
  return (
    <section className="py-20">
       <div className="bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden animate-slide-up">
        <div className="p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Collaborate with Me</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Interested in working together on innovative projects? Let's connect and explore potential opportunities in AI, healthcare technology, or software development.
                </p>
              </div>
              <div className="flex justify-center">
                <a
                  href="/contact"
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 