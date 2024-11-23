import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTestData1732280885581 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        INSERT INTO public.association
        (id, "name", logo, description, telegram, phone, email, membership_fee)
        VALUES(1, 'Aalto Salsa Society', 'https://www.ayy.fi/sites/g/files/flghsv231/files/styles/o_690w_ah_n/public/2024-09/Aalto_Salsa_Society.png?itok=rkpOM-wy', 'The Aalto Salsa Society is a welcoming community of Latin dance enthusiasts! We teach Salsa and Bachata classes and organize various events throughout the year. 
        
        We want to invite you, whether you’ve been dancing since your childhood or have never even heard of Salsa or Bachata. We will adapt to your abilities, offering weekly classes of various experience levels. You will not only be dancing to keep yourself active, you’ll also be dancing through the dark and cold times of the year without even noticing! 
        
        You can find information on classes and events on our website and telegram channel , or you can even come to one of our socials to ask us in person.', '@ass', '+358 888 888', 'ass@email.com', 10);
        INSERT INTO public.association
        (id, "name", logo, description, telegram, phone, email, membership_fee)
        VALUES(2, 'Aalto University''s Mechatronics Club (AMEK)', 'https://www.ayy.fi/sites/g/files/flghsv231/files/styles/o_690w_ah_n/public/2024-09/AMEK.png?itok=wiRfTL6l', 'AMEK is a professional association for students interested in mechatronics, located in Otaniemi, Espoo. The association''s activities are managed by a board composed of students from Aalto University.
        
        The association brings together students from various fields, including mechanical engineering, automation and systems technology, and electrical engineering, and aims to promote the visibility of the mechatronics field and the success of its members within the industry. Our goal is to work closely with students, Aalto University, and companies in the field. We organize company excursions and other events for our members.', '@amek', '+358 888 888', 'amek@email.com', 12);
        INSERT INTO public.association
        (id, "name", logo, description, telegram, phone, email, membership_fee)
        VALUES(3, 'A!dventures', 'https://www.ayy.fi/sites/g/files/flghsv231/files/styles/1_6_567w_354h_n/public/2019-05/adventures_logo.jpg?h=97f6b441&itok=DOEQpOzP', 'A!dventures, a.k.a. Aallon Seikkailu-urheilijat, focuses on adventure and extreme sports. We enjoy all the fancy places – mountains, tundras, forests, deserts, and oceans, and all the different sports those places are good for: climbing, hiking, skiing, triathlon and so forth!
        
        ', '@adventures', '+358 888 888', 'adventures@email.com', 14);
        INSERT INTO public.association
        (id, "name", logo, description, telegram, phone, email, membership_fee)
        VALUES(4, 'Polytechnic Sauna Society', 'https://www.ayy.fi/sites/g/files/flghsv231/files/styles/o_690w_ah_n/public/2019-05/polyteknikkojen_saunaseura_logo.png?itok=ylOwfb-m', 'Goal of the Polytechnic Sauna Society (PTSS) is to bring together people interested in sauna and sauna culture as well as promote knowledge in sauna culture and uphold the sauna traditions in the Otaniemi campus area. We arrange sauna evenings and excursions to public saunas as well as other sauna-related events.', '@saunasociety', '+358 888 888', 'saunasociety@email.com', 20);
        INSERT INTO public.association
        (id, "name", logo, description, telegram, phone, email, membership_fee)
        VALUES(5, 'Climbing club Oranki ry', 'https://www.ayy.fi/sites/g/files/flghsv231/files/styles/o_690w_ah_n/public/2019-05/kiipeilykerho-oranki_logo.jpg?itok=vfESnCFV', 'Oranki ry is a climbing club and our purpose is to bring together climbing enthusiasts and those interested in climbing. Additionally, our goal is to promote the hobby opportunities of our members and support the development of a safe and responsible climbing culture within the academic community.
        
        Oranki organizes various events for its members, including regular indoor and outdoor climbing sessions, climbing trips both domestically and internationally, sauna evenings, climbing competitions, and much more!
        
        Oranki is a sub-organization under the Aalto University Student Union, but anyone interested in climbing can become a member.
        ', '@climbingclub', '+358 888 888', 'climbingclub@email.com', 23);
        INSERT INTO public.association
        (id, "name", logo, description, telegram, phone, email, membership_fee)
        VALUES(6, 'Otanko ry', 'https://www.ayy.fi/sites/g/files/flghsv231/files/styles/o_690w_ah_n/public/2023-11/Otanko.png?itok=ecNfriOr', 'Are you tired of the same old gym routine and looking for a fun and unique way to sculpt your body by getting impressive biceps and a stunning six-pack?
        
        Look no further than pole dancing!
        
        And the best part is, you can now experience the thrill of pole dancing in Otaniemi! Otanko ry is an AYY association that offers affordable (30e/year) pole dance classes in Otaniemi.
        
        Join us for weekly classes, exhilarating workshops, and captivating pole dance shows open to both members and the wider community.
        
        To get all the details and sign up for classes, become a member by filling out our quick sign-up form! Your first class is on us, and there''s no need to pre-register. Simply choose a beginner class from our website at a convenient time and show up! ', '@otankory', '+358 888 888', 'otankory@email.com', 12);
        INSERT INTO public.association
        (id, "name", logo, description, telegram, phone, email, membership_fee)
        VALUES(7, 'Aalto Beer Pong', 'https://www.ayy.fi/sites/g/files/flghsv231/files/styles/o_690w_ah_n/public/2019-05/aalto_beer_pong_logo.png?itok=5cvvpBqv', 'Aalto Beer Pong was founded in December 2011. The main objective of the association is to promote the Beer Pong better known in Finland. Aalto Beer Pong is a non-profit association.
        
        The association organizes regular tournaments and member events. We will also provide instruction to the sport, as well as borrow games tools. We are also working with other associations so ABP can be found from numerous of events.
        
        Annual tournaments
        
        Freshman tournament (fall)
        Finnish Series of Beer Pong (fall)
        Cocktail Pong (fall)
        Students'' Beer Pong Championships (spring)
        
        In addition to the ones above, we organise other theme tournaments and events.', '@aaltobeerpong', '+358 888 888', 'aaltobeerpong@email.com', 18);
        INSERT INTO public.association
        (id, "name", logo, description, telegram, phone, email, membership_fee)
        VALUES(8, 'Aalto Daigaku', 'https://www.ayy.fi/sites/g/files/flghsv231/files/styles/o_690w_ah_n/public/2019-05/aalto_daigaku_maajanbu_logo.png?itok=NvFw0elV', 'Aalto Daigaku Maajanbu ry (or アールト大学麻雀部) is an Espoo-based association founded in September 2013 to bring together players of Riichi mahjong and promote mahjong at Aalto University.
        
        Riichi mahjong is a japanese variation of the old Chinese 4-player game. This is not the solitaire mahjong which many may know, but a complex and exciting game popular in Japan.
        
        Our association is open for everyone interested in Riichi mahjong. Our activities include weekly mahjong sessions during semesters as well as tournaments and excursions.', '@aaltodaigaku', '+358 888 888', 'aaltodaigaku@email.com', 22);
        INSERT INTO public.association
        (id, "name", logo, description, telegram, phone, email, membership_fee)
        VALUES(9, 'Otakut', 'https://www.ayy.fi/sites/g/files/flghsv231/files/styles/o_690w_ah_n/public/2024-07/Otakut-Logo-2013%20%281%29.png?itok=WW8Q-zwZ', 'Otakut is an anime club in Espoo, affiliated with Aalto University''s Student Union since May 1996. We support hobbies related to Japanese animated movies, series and comics.
        
        Activities
        - Anime Evenings
        - Movie Nights and Marathons
        - Game and Karaoke Nights
        - Friday Social Events
        - Outings and Collaborations
        - Convention Attendance
        
        Events are centered in Otaniemi.
        ', '@otakut', '+358 888 888', 'otakut@email.com', 11);
        INSERT INTO public.association
        (id, "name", logo, description, telegram, phone, email, membership_fee)
        VALUES(10, 'Aalto-Basket', 'https://www.ayy.fi/sites/g/files/flghsv231/files/styles/o_690w_ah_n/public/2019-05/aaltobasket_logo.png?itok=dGaniM1S', 'Aalto-Basket is the basketball team of Aalto University from Espoo.
        Our club has long traditions of student sports, being founded way back in 1981.
        During recent years, the club has grown, and nowadays consists of four teams:
        
        • Men’s 1st team: Plays in 2nd division, practices twice a week
        • Men’s 2nd team: Plays in 4th division, practices twice a week
        • Men’s 3rd team: Plays in 5th division, practices once a week
        • Women’s team: Playes in 4th division, practices twice a week
        
        Each team is looking for new players for the upcoming season (or just to join our practices) – So, feel free to contact us!', '@aaltobasket', '+358 888 888', 'aaltobasket@email.com', 23);
        

        INSERT INTO public."event"
        (title, description, picture, "date", "location", price, capacity, association_id)
        VALUES( 'Salsa class', 'Discover the rhythm and passion of salsa dancing in a fun and engaging environment! Whether you''re a complete beginner or an experienced dancer, our Salsa Class welcomes all skill levels to sway to the infectious beats of Latin music. Led by a dynamic instructor, you''ll learn foundational moves, partner work, and styling tips that will leave you feeling confident on the dance floor. Come solo or with a partner—either way, you''re guaranteed to leave with new moves and a smile!

        ', 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Salsa_dancing.jpg', '1.12.2024', 'JMT 1', 10, 15, 1);
        INSERT INTO public."event"
        ( title, description, picture, "date", "location", price, capacity, association_id)
        VALUES( 'Let''s play basketball!', 'Grab your sneakers and join us for an adrenaline-packed basketball session! Whether you’re a seasoned player or just looking to shoot some hoops for fun, this friendly game is perfect for all skill levels. With team formations on-site, you''ll experience the thrill of competition and camaraderie. Warm up with drills, learn tips from fellow players, and enjoy an action-filled evening that combines fitness, teamwork, and a whole lot of fun!

        ', 'https://contents.mediadecathlon.com/s810360/k$ce007b2ba4e512378df6a8ab44b46e68/440x249/gabarit-banner-page-nouvelle-collection-enfant-2020-PE.jpg?format=auto&quality=70&f=1024x0', '1.12.2024', 'Otaniemi', 5, 15, 10);
        INSERT INTO public."event"
        (title, description, picture, "date", "location", price, capacity, association_id)
        VALUES('Anime night @ JMT 1', 'Calling all anime enthusiasts! Join us for Anime Night at JMT 1, where we''ll screen some of the hottest and most beloved anime series and movies. Bring your favorite snacks, cuddle up in comfy seats, and immerse yourself in the vibrant worlds of Japanese animation. From action-packed adventures to heartwarming stories, there''s something for everyone. Plus, enjoy trivia games and prizes for true otakus!

        ', 'https://i.pinimg.com/originals/13/8b/d8/138bd88495ebf593673c7bf30d6e6033.jpg', '1.12.2024', 'SMT6', 12, 25, 9);
        INSERT INTO public."event"
        (title, description, picture, "date", "location", price, capacity, association_id)
        VALUES('Forest adventures', 'Escape the city and immerse yourself in nature with our Forest Adventures! Experience the beauty of the great outdoors as we trek through lush green trails, enjoy serene moments by hidden streams, and engage in fun team challenges along the way. Whether you''re a nature lover or just in need of a breath of fresh air, this event promises an unforgettable journey filled with laughter, exploration, and a deeper connection to the natural world.

        ', 'https://offerengine.theentertainerme.com/forest-adventure-x171990/merchant_profile_%22hero%22_image_slide.2_%28retina%292024072301001.jpg', '1.12.2024', 'Otaniemi park', 10, 10, 3);
        INSERT INTO public."event"
        (title, description, picture, "date", "location", price, capacity, association_id)
        VALUES('Pole dance for beginners', 'Unleash your inner strength and confidence with our Pole Dance for Beginners class! This empowering and fun-filled session is designed for anyone curious about trying pole dancing for the first time. Our experienced instructor will guide you through basic spins, grips, and techniques while focusing on building strength, flexibility, and self-expression. No experience needed—just bring your enthusiasm and prepare to feel fabulous!

        ', 'https://static.wixstatic.com/media/0addb6_e306ba86d46644e2bc778989584d8dad~mv2.jpg/v1/fill/w_536,h_804,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pole%20dance%20Helsinki.jpg', '1.12.2024', 'JMT 1', 15, 12, 6);
        INSERT INTO public."event"
        (title, description, picture, "date", "location", price, capacity, association_id)
        VALUES('Steamy Sauna Sunday', 'Relax and rejuvenate with our Steamy Sauna Sunday! This traditional Finnish experience invites you to unwind in a warm, soothing sauna, perfect for melting away stress and recharging your spirit. Bring your friends, enjoy light refreshments, and embrace the therapeutic power of steam. Whether you''re a sauna enthusiast or new to the tradition, this is your chance to indulge in ultimate relaxation.

        ', 'https://cdn.visittampere.fi/A3uTHfZwbRz-iw-7DDuvqWl7P_qLt8ylLIOIiJqwvZI/rs:fill:780:1040/plain/https%3A%2F%2Fvisittampere.fi%2Fwp-content%2Fuploads%2F2024%2F02%2FVisit_Tampere_Suolijarven_Sauna_Suolijarvi_Laura_Vanzo-12-2-780x1040.jpg@webp', '1.12.2024', 'JMT 5', 10, 8, 4);
        INSERT INTO public."event"
        (title, description, picture, "date", "location", price, capacity, association_id)
        VALUES('Mahjong night', 'Challenge your mind and test your strategy at Mahjong Night! Whether you''re a seasoned player or completely new to the game, this event offers a welcoming atmosphere to learn, play, and connect with others. Gather around the table for thrilling rounds of this classic Chinese tile game, enjoy light refreshments, and revel in the camaraderie of a shared love for strategy and tradition.

        ', 'https://www.hackingchinese.com/wp-content/uploads/2015/04/mahjong-game.jpg', '1.12.2024', 'Undergraduate center', 5, 15, 8);
        INSERT INTO public."event"
        (title, description, picture, "date", "location", price, capacity, association_id)
        VALUES('Hike @ Nuuksio National Park', 'Experience the breathtaking beauty of Nuuksio National Park with our guided hike! Venture through serene forests, sparkling lakes, and rugged trails as we explore one of Finland''s natural treasures. Perfect for both seasoned hikers and first-timers, this adventure promises stunning views, fresh air, and an opportunity to connect with nature. Don’t forget to pack your camera and a snack for the journey!

        ', 'https://www.alltrails.com/_next/image?url=https%3A%2F%2Fimages.alltrails.com%2FeyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNjIzMjQzODIvOGI1MjkzZjVjMjJjZTljMzA2NmQ3YjRkYjI3NjRmN2EuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxMDgwLCJoZWlnaHQiOjcwMCwiZml0IjoiY292ZXIifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0%3D&w=3840&q=90', '1.12.2024', 'Nuuksio National Park', 5, 20, 5);
        INSERT INTO public."event"
        (title, description, picture, "date", "location", price, capacity, association_id)
        VALUES('Beer Pong Afterparty', 'Get ready for an evening of fun, laughter, and friendly competition at our Beer Pong Afterparty! Whether you''re a pro at sinking cups or just here for the vibe, this lively event guarantees a good time. Enjoy upbeat music, cheer on your teammates, and take part in the ultimate test of aim and strategy. Win or lose, the camaraderie and unforgettable memories make everyone a champion!

        ', 'https://www.famoushostels.com/wp-content/uploads/porto-beer-pong-4.jpg', '1.12.2024', 'Smokki', 10, 12, 7);
        INSERT INTO public."event"
        (title, description, picture, "date", "location", price, capacity, association_id)
        VALUES('Let''s fix stuff together!', 'Roll up your sleeves and bring your broken treasures to our Let''s Fix Stuff Together! workshop. From wobbly chairs to electronic gadgets, our skilled volunteers will guide you in repairing your belongings. It’s a sustainable, budget-friendly, and community-driven way to give your items a second life. Don’t have anything to fix? Drop by to lend a hand, share ideas, or simply enjoy the satisfaction of seeing something restored!

        ', 'https://www.northlandcollege.edu/files/221201-155-800x640.jpg', '2.12.2024', 'Car club JMT 1', 10, 20, 2);
        
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DELETE FROM public.association WHERE name='Aalto Salsa Society';
        DELETE FROM public.association WHERE name='Aalto University's Mechatronics Club (AMEK)';
        DELETE FROM public.association WHERE name='A!dventures';
        DELETE FROM public.association WHERE name='Polytechnic Sauna Society';
        DELETE FROM public.association WHERE name='Climbing club Oranki ry';
        DELETE FROM public.association WHERE name='Otanko ry';
        DELETE FROM public.association WHERE name='Aalto Beer Pong';
        DELETE FROM public.association WHERE name='Aalto Daigaku';
        DELETE FROM public.association WHERE name='Otakut';
        DELETE FROM public.association WHERE name='Aalto-Basket';

        DELETE FROM public."event" WHERE id=1;
        DELETE FROM public."event" WHERE id=2;
        DELETE FROM public."event" WHERE id=3;
        DELETE FROM public."event" WHERE id=4;
        DELETE FROM public."event" WHERE id=5;
        DELETE FROM public."event" WHERE id=6;
        DELETE FROM public."event" WHERE id=7;
        DELETE FROM public."event" WHERE id=8;
        DELETE FROM public."event" WHERE id=9;
        DELETE FROM public."event" WHERE id=10;
        `);
  }
}
