import { useNavigate } from "react-router-dom";

const JobActivity = () => {
  const navigate = useNavigate();

  const topics = [
    { title: "Understanding Job Market Trends", description: "Stay informed about current hiring trends." },
    { title: "Exploring Career Opportunities", description: "Discover new career paths and industries." },
    { title: "Job Search Strategies", description: "Optimize your job search for better results." },
    { title: "Networking for Job Seekers", description: "Build valuable connections to boost your career." },
    { title: "Preparing for Job Interviews", description: "Ace your interviews with confidence and strategy." },
    { title: "Negotiating Job Offers", description: "Learn how to negotiate salary and benefits effectively." },
    { title: "Building a Strong LinkedIn Profile", description: "Enhance your online presence to attract recruiters." },
    { title: "Overcoming Job Search Challenges", description: "Tackle common job search obstacles and setbacks." }
  ];

  
  /*const handleTopicClick = (title) => {
    navigate(`/chat?topic=${encodeURIComponent(agent_learning_path)}`);
  };*/
  const handleTopicClick = () => {
    navigate(`/chat/agent_learning_path/`);
  };


  return (
    <section className="py-16 bg-gray-100">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {topics.map((topic, i) => (
          <div 
            key={i} 
            className="testimonial-box text-center cursor-pointer hover:shadow-lg transition" 
            onClick={() => handleTopicClick(topic.title)}
          >
            <h4 className="mt-2 font-bold">{topic.title}</h4>
            <p className="text-gray-700">"{topic.description}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobActivity;
