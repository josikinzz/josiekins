import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

export function Purpose() {
  return (
    <Section
      verticalPadding="large"
      background="image"
      backgroundImage="/images/prototheism/josie+and+emily+it+came+to+me+in+a+trip.webp"
      backgroundOverlay
    >
      <div className="max-w-3xl mx-auto text-white">
        <Link to="/prototheism" className="text-white/80 hover:text-white mb-8 inline-block">
          &larr; Back to Prototheism
        </Link>

        <img
          src="/images/prototheism/purpose.webp"
          alt="Purpose"
          className="max-w-md mx-auto mb-8 block"
        />

        <h1 className="text-4xl font-bold text-center text-accent mb-12">Purpose</h1>

        <div className="space-y-6">
          <p>
            Humans possess an innate drive for spirituality, akin to the basic drives of hunger, thirst, and sex. This drive compels individuals to seek meaning and purpose by contextualizing their lives within a larger framework.
          </p>

          <p>
            The two principles upon which we must have <Link to="/prototheism/faith" className="text-accent hover:underline">Faith</Link> in Prototheism are that You Exist, and You Are Fallible. Furthermore, these principles must apply to everyone - everyone is fallible. Therefore, you should be skeptical of all ideas, particular important or consequential ideas like your spiritual beliefs.
          </p>

          <p>
            An inherent aspect of a Prototheism adherent's Purpose must be to analyze and be critical of Prototheism itself. You may analyze this version of Prototheism and find that you agree with the ideas it contains - this analysis and consideration is a spiritual practice within Prototheism. That said, it is also a spiritual practice to analyze, consider, and amend Prototheism in accordance with your own insights. In this situation, you should Fork Prototheism as an act of Prototheistic Faith.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-accent text-center">Forking Prototheism</h2>
          <p>
            Forking Prototheism involves adapting elements (whether minor or foundational) of the open-source religion to reflect personal beliefs and worldviews. This process involves modifying the provided texts, concepts, and aesthetic elements to create a personalized version of Prototheism. The following steps outline the technical aspects of forking the Prototheism repository on GitHub.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-accent">1. Set Up Your Tools</h3>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li><span className="text-accent font-bold">Create a GitHub Account:</span> A GitHub account is required to fork the Prototheism repository. If an account is not already established, create a free account at GitHub.com.</li>
            <li>Navigate to the <a href="https://github.com/elliotec/prototheism" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">Prototheism repository</a> on GitHub.</li>
            <li><span className="text-accent font-bold">Fork the Repository:</span> Click the 'Fork' button located at the top right corner of the repository page. This action creates a personal copy of the Prototheism repository that can be modified independently.</li>
            <li><span className="text-accent font-bold">Clone the Repository:</span> To work on the forked version locally, clone the repository to your machine using the 'git clone' command on the command line followed by the repository URL, or using <a href="https://github.com/apps/desktop" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">Github's desktop app</a>.</li>
            <li><span className="text-accent font-bold">Create a New Branch:</span> Create a new branch for your personal modifications using the 'git checkout -b' command followed by the branch name, or via the app interface. This allows you to work on your changes without affecting the original version.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-accent">2. Customize Your Version</h3>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li><span className="text-accent font-bold">Review Your Beliefs:</span> Analyze the tenets of Prototheism and identify areas that align or misalign with personal beliefs. Consider how these aspects relate to individual views on spirituality and the Universe.</li>
            <li><span className="text-accent font-bold">Choose a Name:</span> Select a name for your personalized version of Prototheism. We suggest using the convention "[YourName]-Prototheism" or "[YourIdentifier]-Prototheism" to emphasize the personalized nature of your framework while maintaining a connection to the original Prototheism. For example, if your name is John, you might call your version "John-Prototheism." If you prefer to use an identifier, such as "Seeker," you could name your version "Seeker-Prototheism."</li>
            <li><span className="text-accent font-bold">Modify the Forked Repository:</span> Use the GitHub editor or a text editor on a local machine to make changes to the forked repository. Modifications may include editing texts, suggesting new practices, or rewriting doctrines. For example, you might modify the tenets to emphasize specific values or incorporate practices from other spiritual traditions that resonate with you.</li>
            <li>
              <span className="text-accent font-bold">Customize Aesthetic Elements and Presentation:</span> In addition to modifying the texts and concepts, you can also customize the aesthetic elements and overall presentation of your forked version to create a unique look and feel. This may include:
              <ul className="list-disc list-inside space-y-1 ml-8 mt-2">
                <li>Selecting different tenet symbols that represent your unique interpretation of each tenet</li>
                <li>Choosing accompanying images that evoke the desired atmosphere for your version</li>
                <li>Adjusting the visual style, color scheme, typography, layout, or other design elements to align with your personal preferences and the intended tone of your personalized Prototheism</li>
                <li>For example, you might choose a calming color palette and minimalist layout to emphasize simplicity and introspection, or a vibrant and dynamic design to convey energy and enthusiasm.</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-accent">3. Share Your Version</h3>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li><span className="text-accent font-bold">Commit Your Changes:</span> After completing the desired modifications, commit the changes to your branch using the 'git commit' command. Include a brief commit message that describes the nature of the changes made.</li>
            <li><span className="text-accent font-bold">Push to GitHub:</span> Push your local changes to the forked repository on GitHub using the 'git push' command. This updates your online repository with the modifications you've made.</li>
            <li><span className="text-accent font-bold">Create a Pull Request (Optional):</span> If you'd like to contribute your changes back to the original Prototheism repository, create a pull request. This notifies the Prototheism maintainers of your proposed changes and allows for discussion and potential integration into the main project.</li>
            <li><span className="text-accent font-bold">Share with the Community:</span> Share the forked version of Prototheism on the community forum or a dedicated page of the Prototheism website. This allows other users to view the personalized interpretation and potentially draw inspiration from it. Engage in discussions with community members, provide feedback on each other's forked versions, and collaborate with those who have similar beliefs or interests.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-accent">4. Continuous Development</h3>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li><span className="text-accent font-bold">Regularly Review and Adapt:</span> As personal beliefs and understanding evolve over time, it is important to regularly revisit and revise the forked version of Prototheism. This ensures that the personalized version remains aligned with the individual's spiritual journey.</li>
            <li><span className="text-accent font-bold">Incorporate Updates from the Original Repository:</span> Keep track of changes made to the original Prototheism repository and incorporate relevant updates into your forked version. This can be done by pulling changes from the original repository and merging them into your branch.</li>
            <li><span className="text-accent font-bold">Document Your Changes:</span> Maintain a record of the modifications made in your forked version and the reasoning behind them. This documentation serves as a valuable reference for yourself and others who may be interested in understanding the evolution of your personalized Prototheism.</li>
            <li><span className="text-accent font-bold">Reflect on Your Motivations:</span> Regularly reflect on your reasons for forking Prototheism and how your personalized version contributes to your spiritual growth and understanding. Consider how your modifications align with or diverge from the core principles of Prototheism and the implications of these changes for your personal spiritual practice.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-accent">Resources and Support</h3>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li><span className="text-accent font-bold">Learning Materials:</span> Consult the Prototheism resources page for a list of recommended readings on theology, philosophy, and other religious texts that may provide inspiration for further customization.</li>
            <li><span className="text-accent font-bold">Community Support:</span> Utilize the Prototheism community forum to seek assistance, ask questions, or engage with like-minded individuals who are also involved in the forking process. Participate in community events and challenges that encourage the exploration and sharing of personalized Prototheism versions.</li>
          </ul>

          {/* McKenna Syndrome Banner */}
          <div className="max-w-lg mx-auto mt-12">
            <Link to="/mckenna-syndrome" className="block hover:opacity-90 transition-opacity">
              <img
                src="/images/prototheism/josie+and+emily+it+came+to+me+in+a+trip.webp"
                alt="McKenna Syndrome"
                className="w-full h-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
