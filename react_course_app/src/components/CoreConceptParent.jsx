import CoreConcept from './CoreConcept.jsx';
import Section from './Section.jsx';
import { CORE_CONCEPTS } from '../data.js';

export default function CoreConceptParent() {
  return (
    <Section title="Core Concepts" id="core-concepts">
        <ul>
            {CORE_CONCEPTS.map((item) => <CoreConcept key={item.title} {...item}/> )}
        </ul>
    </Section>
  )
}
