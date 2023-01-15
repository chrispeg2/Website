import AbstractView from "./view.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("photos");
    }

    async getHtml() {
        return `
            <p id="Author">
             <div class="image-gallery">
                <div>
                    <img src="https://stephenking.com/assets/gallery_images/First-car.jpg" width="255" height="193" class="single-img">
                    <div class="desc">First Car</div>
                </div>
                <div>
                    <img src="https://stephenking.com/assets/gallery_images/July-4-1952.jpg" width="255" height="193" class="single-img">
                    <div class="desc">July 4th</div>
                </div>
                <div>
                    <img src="https://stephenking.com/images/author_picture/14/majestic_theatre_dallas_11.10.11.jpg" width="255" height="193" class="single-img">
                    <div class="desc">Majestic Theatre, Dallas</div>
                </div>
                <div>
                    <img src="https://stephenking.com/images/author_picture/17/jfk_library__2011_stephen__tom_perrotta.jpg" width="255" height="193" class="single-img">
                    <div class="desc">JFK Library, Dallas</div>
                </div>
                <div>
                    <img src="https://stephenking.com/images/author_picture/1/stephen_king.jpg" width="182" height="269" class="single-img">
                    <div class="desc">Press Photo <br>Amy Guip © 2006 </div>
                </div>
                <div>
                    <img src="https://stephenking.com/assets/gallery_images/RockefellerPlaza-9-27-98.jpg" width="182" height="269" class="single-img">
                    <div class="desc">Rockefeller 1998 <br>Audrey Sparkes © 1998 </div>
                </div>
                <div>
                    <img src="https://stephenking.com/assets/gallery_images/SK-4.jpg" width="182" height="269" class="single-img">
                    <div class="desc">circa 1991 <br>Tabitha King</div>
                </div>
                <div>
                    <img src="https://stephenking.com/assets/gallery_images/We-Never-Sleep.jpg" width="182" height="269" class="single-img">
                    <div class="desc">We Never Sleep <br>James Leonard © 1994</div>
                </div>
                <div>
                    <img src="https://stephenking.com/assets/gallery_images/Florida-2000.jpg" width="182" height="269" class="single-img">
                    <div class="desc">Florida, 2000 <br>Tabitha King © 2000</div>
                    
                </div>
                
             </div>
            
            </p>

            <p id="Films">
                <div class="image-gallery">
                    <div>
                        <img src="https://stephenking.com/images/movies/a-good-marriage/a_good_marriage_prop_embed.jpg" width="182" height="269" class="single-img">
                        <div class="desc">A Good Marriage</div>
                    </div>
                    <div>
                        <img src="https://stephenking.com/images/movies/theatrical_movie/carrie/us_prop_embed.jpg" width="182" height="269" class="single-img">
                        <div class="desc">carrie</div>
                    </div>
                    <div>
                        <img src="https://stephenking.com/images/movies/theatrical_movie/children_of_the_corn/us_prop_embed.jpg" width="182" height="269" class="single-img">
                        <div class="desc">Children of the Corn</div>
                    </div>
                    <div>
                        <img src="https://stephenking.com/images/movie/26/us2.jpg" width="182" height="269" class="single-img">
                        <div class="desc">The Green Mile</div>
                    </div>
                    <div>
                        <img src="https://stephenking.com/images/movie/41/itposter01.jpg" width="182" height="269" class="single-img">
                        <div class="desc">IT</div>
                    </div>
                    <div>
                        <img src="https://stephenking.com/images/movies/theatrical_movie/pet_sematary/us_prop_embed.jpg" width="182" height="269" class="single-img">
                        <div class="desc">Pet Sematary </div>
                    </div>

                    <div>
                        <img src="https://stephenking.com/images/movies/theatrical_movie/the_mist/us_prop_embed.jpg" width="182" height="269" class="single-img">
                        <div class="desc">The Mist</div>
                    </div>
                    <div>
                        <img src="https://stephenking.com/images/movie/23/us3.jpg" width="182" height="269" class="single-img">
                        <div class="desc">Sleepwalkers</div>
                    </div>
                    <div>
                        <img src="https://stephenking.com/images/movies/theatrical_movie/the_shining/us_prop_embed.jpg" width="182" height="269" class="single-img">
                        <div class="desc">The Shining</div>
                    </div>
                    <div>
                        <img src="https://stephenking.com/images/movie/44/1922.full.jpg" width="182" height="269" class="single-img">
                        <div class="desc">1922</div>
                    </div>
                    <div>
                        <img src="https://stephenking.com/images/movie/47/it_chapter_2.jpg" width="182" height="269" class="single-img">
                        <div class="desc">IT: Chapter Two</div>
                    </div>
                    <div>
                        <img src="https://stephenking.com/images/movie/50/psupload.jpg" width="182" height="269" class="single-img">
                        <div class="desc">Pet Sematary (2019) </div>
                    </div>
        
        
                </div>
            <p id="Books">
                <div class="image-gallery">
                    <div>
                        <img src="https://stephenking.com/images/novel/55/hardcover_illo_prop_embed.jpg" width="182" height="269" class="single-img">
                        <div class="desc">'Salem's Lot <br>Illustrated Edition</div>
                    </div>
                    <div>
                        <img src="https://stephenking.com/images/books/11-22-63/11-22-63_prop_embed.jpg" width="182" height="269" class="single-img">
                        <div class="desc">11/22/63</div>
                    </div>
                    <div>
                        <img src="https://stephenking.com/images/anthology/70/a_book_of_horrors.jpg" width="182" height="269" class="single-img">
                        <div class="desc">A Book Of Horrors</div>
                    </div>
                    <div>
                        <img src="https://stephenking.com/images/books/different_seasons/hardcover_prop_embed.jpg" width="182" height="269" class="single-img">
                        <div class="desc">Apt Pupil</div>
                    </div>
                    <div>
                        <img src="https://stephenking.com/images/books/bazaar-of-bad-dreams/bobd_cover_1_prop_embed.jpg" width="182" height="269" class="single-img">
                        <div class="desc">Bad Little Kid</div>
                    </div>
                    <div>
                        <img src="https://stephenking.com/images/anthology/50/nightmares.jpg" width="182" height="269" class="single-img">
                        <div class="desc">Nightmares </div>
                    </div>

                    <div>
                        <img src="https://stephenking.com/images/novel/71/outsider.png" width="182" height="269" class="single-img">
                        <div class="desc">The Outsider</div>
                    </div>
                    <div>
                        <img src="https://stephenking.com/images/books/skeleton_crew/hardcover_prop_embed.jpg" width="182" height="269" class="single-img">
                        <div class="desc">Skeleton Crew</div>
                    </div>
                    <div>
                        <img src="https://stephenking.com/images/other_project/4/devils_wine.jpg" width="182" height="269" class="single-img">
                        <div class="desc">Silence</div>
                    </div>
                    <div>
                        <img src="https://stephenking.com/images/anthology/55/tales_of_the_dead.jpg" width="182" height="269" class="single-img">
                        <div class="desc">Tales of the Dead</div>
                    </div>
                    <div>
                        <img src="https://stephenking.com/images/anthology/68/zombies.jpg" width="182" height="269" class="single-img">
                        <div class="desc">Zombies! Zombies!</div>
                    </div>
                    <div>
                        <img src="https://stephenking.com/images/limited_edition/carrie/carrie_dse_prop_embed.jpg" width="182" height="269" class="single-img">
                        <div class="desc">Carrie </div>
                    </div>
        
        
                </div>
            
            </p>
        `;
    }
}