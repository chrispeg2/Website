import AbstractView from "./view.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Bio");
    }

    async getHtml() {
        return `
        <p id="General">
            <img src="https://images.gr-assets.com/authors/1362814142p8/3389.jpg" width="270" height="400"  class="stephen-img">
            <h1>Stephen King</h1>
            <p>
                Stephen Edwin King (born September 21, 1947) is an American author
                of horror, supernatural fiction, suspense, crime, science-fiction, and
                fantasy novels. Described as the "King of Horror", a play on his
                surname and a reference to his high standing in pop-culture, his books
                have sold more than 350 million copies, and many have been adapted
                into films, television series, miniseries, and comic books. King has
                published 64 novels, including seven under the pen name Richard 
                Bachman, and five non-fiction books. He has also written 
                approximately 200 short stories, most of which have been published in 
                book collections.  
            </p>
            <p>
                King has received Bram Stoker Awards, World Fantasy Awards, and 
                British Fantasy Society Awards. In 2003, the National Book 
                Foundation awarded him the Medal for Distinguished Contribution to 
                American Letters. He has also received awards for his contribution to
                literature for his entire bibliography, such as the 2004 World Fantasy 
                Award for Life Achievement and the 2007 Grand Master Award from 
                the Mystery Writers of America. In 2015, he was awarded with a 
                National Medal of Arts from the U.S. National Endowment for the 
                Arts for his contributions to literature. 
            </p>
        </p>
        <p id="Career">
            <h1>Career</h1>
            <h2>Beginnings</h2>
            <p>
                King sold his first professional short story, "The Glass Floor", to 
                Startling Mystery Stories in 1967.After graduating from the University 
                of Maine, King earned a certificate to teach high school but, unable to 
                find a teaching post immediately, he supplemented his laboring wage by selling 
                short stories to men's magazines such as Cavalier. Many of these early stories 
                were republished in the collection Night Shift. The short story "The Raft" was 
                published in Adam, a men's magazine. After being arrested for stealing traffic 
                cones (he was annoyed after one of the cones knocked his muffler loose), 
                he was fined $250 for petty larceny but had no money to pay. However, 
                a check then arrived for "The Raft" (then titled "The Float"), and King 
                cashed it to pay the fine. In 1971, King was hired as a teacher at Hampden Academy 
                in Hampden, Maine. He continued to contribute short stories to magazines and worked on 
                ideas for novels. During 1966–1970, he wrote a draft about his dystopian novel called 
                The Long Walk and the anti-war novel Sword in the Darkness, but neither of the 
                works was published at the time; only The Long Walk was later released in 1979.
            </p>
            <h2>Later Work</h2>
            <p>
                King continues to create and be involved in provocative projects. He has worked directly 
                in television, writing for series like Kingdom Hospital and Under the Dome, with the latter 
                based on his 2009 novel. In 2011, he published 11/22/63, a novel involving time travel as 
                part of an effort to stop the assassination of President John F. Kennedy.
                King also wrote Joyland (2013), a pulp-fiction style thriller that takes readers on a 
                journey to uncovering who's behind an unsolved murder. And he surprised audiences by releasing 
                Doctor Sleep (2013), a sequel to The Shining, with Sleep hitting No. 1 on the New York Times 
                bestseller list.
            </p>
            <p>
                The novelist then published Mr. Mercedes (2014), with Finders Keepers (2015) and End of Watch (2016) 
                rounding out the crime trilogy. In 2017, he teamed with son Owen to deliver Sleeping Beauties, 
                about a mysterious pandemic that leaves women enveloped in cocoons. That year he polished off 
                another collaboration, with Richard Chizmar, on the novella Gwendy's Button Box.
            </p>
            <p>
                Meanwhile, adaptations of King's works have continued to populate the big and small screens. 
                In 2017, the first season of Mr. Mercedes began airing on the Audience Network, while a remake of the 
                horror classic IT enjoyed a hefty box-office haul. In 2019, an adaptation of Doctor Sleep and IT 
                Chapter Two hit theaters, along with a reboot of another signature King property, Pet Sematary.
            </p>
            <p>
                That year also brought the publication of the tireless writer's 61st novel, The Institute, 
                about children with supernatural abilities who are taken from their parents and incarcerated by a 
                mysterious organization.
            </p>
        </p>
        <p id="Writings">
            <h1>Writings</h1>

            <p>
                King has written two novels with horror novelist Peter Straub: The Talisman (1984) and a sequel, 
                Black House (2001). King has indicated that he and Straub would likely write the third and concluding 
                book in this series, the tale of Jack Sawyer, but after Straub passed away in 2022 
                the future of the series is in doubt.
                King produced an artist's book with designer Barbara Kruger, My Pretty Pony (1989), published 
                in a limited edition of 250 by the Library Fellows of the Whitney Museum of American Art. Alfred A. 
                Knopf released it in a general trade edition.
            </p>
            <p>
                The Diary of Ellen Rimbauer: My Life at Rose Red (2001) was a paperback tie-in for the King-penned 
                miniseries Rose Red (2002). Published under anonymous authorship, the book was written by Ridley Pearson. 
                The novel is written in the form of a diary by Ellen Rimbauer, and annotated by the fictional professor 
                of paranormal activity, Joyce Reardon. The novel also presents a fictional afterword by Ellen Rimbauer's grandson, 
                Steven. Intended to be a promotional item rather than a stand-alone work, its popularity spawned a 2003 prequel television 
                miniseries to Rose Red, titled The Diary of Ellen Rimbauer. This spin-off is a rare occasion of another author being 
                granted permission to write commercial work using characters and story elements invented by King. The novel tie-in idea was 
                repeated on Stephen King's next project, the miniseries Kingdom Hospital. Richard Dooling, King's collaborator on Kingdom 
                Hospital and writer of several episodes in the miniseries, published a fictional diary, The Journals of Eleanor Druse, in 2004. 
                Eleanor Druse is a key character in Kingdom Hospital, much as Dr. Joyce Readon and Ellen Rimbauer are key characters in Rose Red. 
            </p>
            <p>
                Throttle (2009), a novella written in collaboration with his son Joe Hill, appears in the anthology He Is Legend: 
                Celebrating Richard Matheson. Their second novella collaboration, In the Tall Grass (2012), was published in two 
                parts in Esquire. It was later released in e-book and audiobook formats, the latter read by Stephen Lang. King and his son Owen 
                King wrote the novel Sleeping Beauties, released in 2017, that is set in a women's prison.
            </p>
            <p>
                King and Richard Chizmar collaborated to write Gwendy's Button Box (2017), a horror novella taking place in King's fictional 
                town of Castle Rock.[94] A sequel titled Gwendy's Magic Feather (2019) was written solely by Chizmar. In November 2020, Chizmar 
                announced that he and King were writing a third installment in the series titled Gwendy's Final Task, this time as a full-length novel, 
                to be released in February 2022.
            </p>
        </p>
            
        `;
    }
}