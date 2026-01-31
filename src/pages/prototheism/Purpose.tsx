import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

interface PurposeProps {
  hideBackButton?: boolean;
}

export function Purpose({ hideBackButton }: PurposeProps) {
  return (
    <div className="">
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
      >
        <div className="max-w-3xl mx-auto text-white">
          {!hideBackButton && (
            <Link to="/prototheism" className="text-accent/60 hover:text-accent mb-8 inline-block transition-colors tracking-wide text-sm uppercase">
              &larr; Back to Prototheism
            </Link>
          )}

          <img
            src="/images/prototheism/purpose.webp"
            alt="Purpose"
            className="max-w-md mx-auto mb-10 block shadow-2xl"
          />

          <h1 className="text-4xl md:text-5xl font-light font-heading text-center text-accent mb-12 tracking-[0.2em] drop-shadow-md">
            Purpose
          </h1>

          <div className="bg-black/20 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-10 shadow-xl">
            <div className="space-y-6 text-lg font-light leading-relaxed text-white/90">
              <p>
                Humans possess an innate drive for spirituality, akin to the basic drives of hunger, thirst, and sex. This drive compels individuals to seek meaning and purpose by contextualizing their lives within a larger framework.
              </p>

              <p>
                The two principles upon which we must have <Link to="/prototheism/faith" className="text-accent hover:text-white transition-colors border-b border-accent/30 hover:border-white">Faith</Link> in Prototheism are that You Exist, and You Are Fallible. Furthermore, these principles must apply to everyone - everyone is fallible. Therefore, you should be skeptical of all ideas, particular important or consequential ideas like your spiritual beliefs.
              </p>

              <p>
                An inherent aspect of a Prototheism adherent's Purpose must be to analyze and be critical of Prototheism itself. You may analyze this version of Prototheism and find that you agree with the ideas it contains - this analysis and consideration is a spiritual practice within Prototheism. That said, it is also a spiritual practice to analyze, consider, and amend Prototheism in accordance with your own insights. In this situation, you should Fork Prototheism as an act of Prototheistic Faith.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-accent uppercase tracking-wide border-b border-white/10 pb-2 inline-block">Forking Prototheism</h2>
              <p>
                Forking Prototheism involves adapting elements (whether minor or foundational) of the open-source religion to reflect personal beliefs and worldviews. This process involves modifying the provided texts, concepts, and aesthetic elements to create a personalized version of Prototheism. The following steps outline the technical aspects of forking the Prototheism repository on GitHub.
              </p>

              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 my-8 border border-white/5">
                <h3 className="text-xl font-bold mb-4 text-accent">1. Set Up Your Tools</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="text-accent font-bold">1.</span>
                    <span><strong className="text-white font-medium">Create a GitHub Account:</strong> A GitHub account is required to fork the Prototheism repository. If an account is not already established, create a free account at GitHub.com.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="text-accent font-bold">2.</span>
                    <span>Navigate to the <a href="https://github.com/elliotec/prototheism" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors border-b border-accent/30 hover:border-white">Prototheism repository</a> on GitHub.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="text-accent font-bold">3.</span>
                    <span><strong className="text-white font-medium">Fork the Repository:</strong> Click the 'Fork' button located at the top right corner of the repository page. This action creates a personal copy of the Prototheism repository that can be modified independently.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="text-accent font-bold">4.</span>
                    <span><strong className="text-white font-medium">Clone the Repository:</strong> To work on the forked version locally, clone the repository to your machine using the 'git clone' command on the command line followed by the repository URL, or using <a href="https://github.com/apps/desktop" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors border-b border-accent/30 hover:border-white">Github's desktop app</a>.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="text-accent font-bold">5.</span>
                    <span><strong className="text-white font-medium">Create a New Branch:</strong> Create a new branch for your personal modifications using the 'git checkout -b' command followed by the branch name, or via the app interface. This allows you to work on your changes without affecting the original version.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 my-8 border border-white/5">
                <h3 className="text-xl font-bold mb-4 text-accent">2. Customize Your Version</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white font-medium">Review Your Beliefs:</strong> Analyze the tenets of Prototheism and identify areas that align or misalign with personal beliefs. Consider how these aspects relate to individual views on spirituality and the Universe.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white font-medium">Choose a Name:</strong> Select a name for your personalized version of Prototheism. We suggest using the convention "[YourName]-Prototheism" or "[YourIdentifier]-Prototheism" to emphasize the personalized nature of your framework while maintaining a connection to the original Prototheism. For example, if your name is John, you might call your version "John-Prototheism." If you prefer to use an identifier, such as "Seeker," you could name your version "Seeker-Prototheism."</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white font-medium">Modify the Forked Repository:</strong> Use the GitHub editor or a text editor on a local machine to make changes to the forked repository. Modifications may include editing texts, suggesting new practices, or rewriting doctrines. For example, you might modify the tenets to emphasize specific values or incorporate practices from other spiritual traditions that resonate with you.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong className="text-white font-medium">Customize Aesthetic Elements and Presentation:</strong> In addition to modifying the texts and concepts, you can also customize the aesthetic elements and overall presentation of your forked version to create a unique look and feel. This may include:
                      <ul className="space-y-2 ml-4 mt-2">
                        <li className="text-white/80 border-l-2 border-accent/30 pl-3">Selecting different tenet symbols that represent your unique interpretation of each tenet</li>
                        <li className="text-white/80 border-l-2 border-accent/30 pl-3">Choosing accompanying images that evoke the desired atmosphere for your version</li>
                        <li className="text-white/80 border-l-2 border-accent/30 pl-3">Adjusting the visual style, color scheme, typography, layout, or other design elements to align with your personal preferences and the intended tone of your personalized Prototheism</li>
                        <li className="text-white/80 border-l-2 border-accent/30 pl-3">For example, you might choose a calming color palette and minimalist layout to emphasize simplicity and introspection, or a vibrant and dynamic design to convey energy and enthusiasm.</li>
                      </ul>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 my-8 border border-white/5">
                <h3 className="text-xl font-bold mb-4 text-accent">3. Share Your Version</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white font-medium">Commit Your Changes:</strong> After completing the desired modifications, commit the changes to your branch using the 'git commit' command. Include a brief commit message that describes the nature of the changes made.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white font-medium">Push to GitHub:</strong> Push your local changes to the forked repository on GitHub using the 'git push' command. This updates your online repository with the modifications you've made.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white font-medium">Create a Pull Request (Optional):</strong> If you'd like to contribute your changes back to the original Prototheism repository, create a pull request. This notifies the Prototheism maintainers of your proposed changes and allows for discussion and potential integration into the main project.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white font-medium">Share with the Community:</strong> Share the forked version of Prototheism on the community forum or a dedicated page of the Prototheism website. This allows other users to view the personalized interpretation and potentially draw inspiration from it. Engage in discussions with community members, provide feedback on each other's forked versions, and collaborate with those who have similar beliefs or interests.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 my-8 border border-white/5">
                <h3 className="text-xl font-bold mb-4 text-accent">4. Continuous Development</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white font-medium">Regularly Review and Adapt:</strong> As personal beliefs and understanding evolve over time, it is important to regularly revisit and revise the forked version of Prototheism. This ensures that the personalized version remains aligned with the individual's spiritual journey.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white font-medium">Incorporate Updates from the Original Repository:</strong> Keep track of changes made to the original Prototheism repository and incorporate relevant updates into your forked version. This can be done by pulling changes from the original repository and merging them into your branch.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white font-medium">Document Your Changes:</strong> Maintain a record of the modifications made in your forked version and the reasoning behind them. This documentation serves as a valuable reference for yourself and others who may be interested in understanding the evolution of your personalized Prototheism.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white font-medium">Reflect on Your Motivations:</strong> Regularly reflect on your reasons for forking Prototheism and how your personalized version contributes to your spiritual growth and understanding. Consider how your modifications align with or diverge from the core principles of Prototheism and the implications of these changes for your personal spiritual practice.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 my-8 border border-white/5">
                <h3 className="text-xl font-bold mb-4 text-accent">Resources and Support</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white font-medium">Learning Materials:</strong> Consult the Prototheism resources page for a list of recommended readings on theology, philosophy, and other religious texts that may provide inspiration for further customization.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-white font-medium">Community Support:</strong> Utilize the Prototheism community forum to seek assistance, ask questions, or engage with like-minded individuals who are also involved in the forking process. Participate in community events and challenges that encourage the exploration and sharing of personalized Prototheism versions.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* McKenna Syndrome Banner */}
          <div className="max-w-lg mx-auto mt-16 -mb-20 md:-mb-32">
            <Link to="/mckenna-syndrome" className="block group relative">
              <img
                src="/images/prototheism/josie+and+emily+it+came+to+me+in+a+trip.webp"
                alt="McKenna Syndrome"
                className="relative w-full h-auto rounded-t-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
