'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Itinerary() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('couple');

  return (
    <section className="section" id="itinerary">
      <h2 className="section-title">{t('itinerary.title')}</h2>
      <p className="section-subtitle">{t('itinerary.subtitle')}</p>
      
      {/* 标签导航 */}
      <div className="itinerary-tabs">
        <button 
          className={`itinerary-tab ${activeTab === 'couple' ? 'active' : ''}`}
          onClick={() => setActiveTab('couple')}
        >
          {t('itinerary.tabs.couple')}
        </button>
        <button 
          className={`itinerary-tab ${activeTab === 'family' ? 'active' : ''}`}
          onClick={() => setActiveTab('family')}
        >
          {t('itinerary.tabs.family')}
        </button>
        <button 
          className={`itinerary-tab ${activeTab === 'halfday' ? 'active' : ''}`}
          onClick={() => setActiveTab('halfday')}
        >
          {t('itinerary.tabs.halfday')}
        </button>
      </div>

      {/* 内容区域 */}
      <div className="itinerary-content">
        {activeTab === 'couple' && <CoupleContent />}
        {activeTab === 'family' && <FamilyContent />}
        {activeTab === 'halfday' && <HalfDayContent />}
      </div>

      {/* 通用贴士 */}
      <GeneralTips />
    </section>
  );
}

function CoupleContent() {
  const { t } = useTranslation();
  
  return (
    <div className="itinerary-days">
      {/* Day 1 */}
      <div className="itinerary-day">
        <h3 className="itinerary-day-title">{t('itinerary.day1Title')}</h3>
        <p className="itinerary-day-subtitle">{t('itinerary.day1Subtitle')}</p>
        <div className="itinerary-stops">
          <div className="itinerary-stop">
            <div className="itinerary-stop-time">09:00-10:00</div>
            <div className="itinerary-stop-content">
              <h4 className="itinerary-stop-name">Porta Nigra</h4>
              <p className="itinerary-stop-desc">Climb to the top for panoramic views of the old town, capturing Roman stone walls against red rooftops.</p>
              <p className="itinerary-stop-address">📍 Simeonstraße 7, 54290 Trier</p>
            </div>
          </div>
          <div className="itinerary-stop">
            <div className="itinerary-stop-time">10:15-11:15</div>
            <div className="itinerary-stop-content">
              <h4 className="itinerary-stop-name">Cathedral & Church of Our Lady</h4>
              <p className="itinerary-stop-desc">Germany's oldest cathedral with Holy Robe relics and Gothic domes. Perfect for romantic walks through the cloisters.</p>
              <p className="itinerary-stop-address">📍 Domfreihof 1, 54290 Trier</p>
            </div>
          </div>
          <div className="itinerary-stop">
            <div className="itinerary-stop-time">11:30-12:15</div>
            <div className="itinerary-stop-content">
              <h4 className="itinerary-stop-name">Basilica of Constantine</h4>
              <p className="itinerary-stop-desc">Ancient Rome's largest pillarless hall with stunning light effects. Ideal for quiet couple photos.</p>
              <p className="itinerary-stop-address">📍 Konstantinplatz 10, 54290 Trier</p>
            </div>
          </div>
          <div className="itinerary-stop">
            <div className="itinerary-stop-time">12:30-13:30</div>
            <div className="itinerary-stop-content">
              <h4 className="itinerary-stop-name">Imperial Baths (with lunch)</h4>
              <p className="itinerary-stop-desc">Explore underground heating tunnels, then relax at the on-site café.</p>
              <p className="itinerary-stop-address">📍 Weberbach 41, 54290 Trier</p>
            </div>
          </div>
          <div className="itinerary-stop">
            <div className="itinerary-stop-time">14:00-15:00</div>
            <div className="itinerary-stop-content">
              <h4 className="itinerary-stop-name">Hauptmarkt Square</h4>
              <p className="itinerary-stop-desc">Colorful medieval buildings and fountains. Buy flowers, enjoy coffee, and stroll the streets.</p>
              <p className="itinerary-stop-address">📍 Hauptmarkt, 54290 Trier</p>
            </div>
          </div>
          <div className="itinerary-stop">
            <div className="itinerary-stop-time">15:15-16:00</div>
            <div className="itinerary-stop-content">
              <h4 className="itinerary-stop-name">Karl Marx House (optional)</h4>
              <p className="itinerary-stop-desc">Cultural stop to see 19th-century home and manuscripts.</p>
              <p className="itinerary-stop-address">📍 Brückenstraße 10, 54290 Trier</p>
            </div>
          </div>
          <div className="itinerary-stop">
            <div className="itinerary-stop-time">16:30-18:00</div>
            <div className="itinerary-stop-content">
              <h4 className="itinerary-stop-name">Roman Bridge + Riverside Walk</h4>
              <p className="itinerary-stop-desc">Ancient Roman stone bridge perfect for sunset silhouettes. Walk along the river to the wine district.</p>
              <p className="itinerary-stop-address">📍 Römerbrücke, 54290 Trier</p>
            </div>
          </div>
          <div className="itinerary-stop">
            <div className="itinerary-stop-time">18:30-20:30</div>
            <div className="itinerary-stop-content">
              <h4 className="itinerary-stop-name">Dinner: Moselle Riverside Restaurant</h4>
              <p className="itinerary-stop-desc">German pork knuckle with Moselle Riesling in candlelight.</p>
              <p className="itinerary-stop-address">📍 Moselweinstraße, 54290 Trier</p>
            </div>
          </div>
        </div>
      </div>

      {/* Day 2 */}
      <div className="itinerary-day">
        <h3 className="itinerary-day-title">{t('itinerary.day2Title')}</h3>
        <p className="itinerary-day-subtitle">{t('itinerary.day2Subtitle')}</p>
        <div className="itinerary-stops">
          <div className="itinerary-stop">
            <div className="itinerary-stop-time">09:30-11:00</div>
            <div className="itinerary-stop-content">
              <h4 className="itinerary-stop-name">Trier Amphitheater</h4>
              <p className="itinerary-stop-desc">Explore underground dungeons and hillside seating with panoramic views. Fewer crowds, perfect photos.</p>
              <p className="itinerary-stop-address">📍 Olewiger Str. 25, 54295 Trier</p>
            </div>
          </div>
          <div className="itinerary-stop">
            <div className="itinerary-stop-time">11:15-12:00</div>
            <div className="itinerary-stop-content">
              <h4 className="itinerary-stop-name">Barbara Baths</h4>
              <p className="itinerary-stop-desc">Lesser-known ruins with complete underground structures, perfect for quiet photography.</p>
              <p className="itinerary-stop-address">📍 Südallee, 54290 Trier</p>
            </div>
          </div>
          <div className="itinerary-stop">
            <div className="itinerary-stop-time">12:15-13:30</div>
            <div className="itinerary-stop-content">
              <h4 className="itinerary-stop-name">Lunch: Old Town German Restaurant</h4>
              <p className="itinerary-stop-desc">Enjoy local specialties to recharge for the afternoon.</p>
            </div>
          </div>
          <div className="itinerary-stop">
            <div className="itinerary-stop-time">14:30-17:00</div>
            <div className="itinerary-stop-content">
              <h4 className="itinerary-stop-name">Moselle Valley Wine Tasting</h4>
              <p className="itinerary-stop-desc">Take bus/taxi to nearby vineyards for wine tasting and romantic vineyard walks.</p>
              <p className="itinerary-stop-address">📍 Moselweinstraße, 54518 Kinheim</p>
            </div>
          </div>
          <div className="itinerary-stop">
            <div className="itinerary-stop-time">17:30-19:00</div>
            <div className="itinerary-stop-content">
              <h4 className="itinerary-stop-name">Evening: Old Town Alleys + Dessert Shop</h4>
              <p className="itinerary-stop-desc">Buy chocolates/cakes and relax at a corner café.</p>
              <p className="itinerary-stop-address">📍 Altstadt, 54290 Trier</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FamilyContent() {
  const { t } = useTranslation();
  
  return (
    <div className="itinerary-stops">
      <div className="itinerary-day">
        <h3 className="itinerary-day-title">{t('itinerary.familyTitle')}</h3>
        <p className="itinerary-day-subtitle">{t('itinerary.familySubtitle')}</p>
        <div className="itinerary-stops">
      <div className="itinerary-stop">
        <div className="itinerary-stop-time">09:00-10:00</div>
        <div className="itinerary-stop-content">
          <h4 className="itinerary-stop-name">Porta Nigra</h4>
          <p className="itinerary-stop-desc">Tell Roman soldier stories, climb stairs to see wall structure. Kids love the height!</p>
          <p className="itinerary-stop-address">📍 Simeonstraße 7, 54290 Trier</p>
        </div>
      </div>
      <div className="itinerary-stop">
        <div className="itinerary-stop-time">10:15-10:45</div>
        <div className="itinerary-stop-content">
          <h4 className="itinerary-stop-name">Cathedral</h4>
          <p className="itinerary-stop-desc">See colorful glass windows and ancient stone carvings. Simple religious stories for children.</p>
          <p className="itinerary-stop-address">📍 Domfreihof 1, 54290 Trier</p>
        </div>
      </div>
      <div className="itinerary-stop">
        <div className="itinerary-stop-time">11:00-11:30</div>
        <div className="itinerary-stop-content">
          <h4 className="itinerary-stop-name">Basilica of Constantine</h4>
          <p className="itinerary-stop-desc">Feel the 'huge room' and play echo games.</p>
          <p className="itinerary-stop-address">📍 Konstantinplatz 10, 54290 Trier</p>
        </div>
      </div>
      <div className="itinerary-stop">
        <div className="itinerary-stop-time">11:45-13:00</div>
        <div className="itinerary-stop-content">
          <h4 className="itinerary-stop-name">Imperial Baths (with lunch)</h4>
          <p className="itinerary-stop-desc">Underground tunnel adventure, simulate ancient Roman bathing. On-site lunch available.</p>
          <p className="itinerary-stop-address">📍 Weberbach 41, 54290 Trier</p>
        </div>
      </div>
      <div className="itinerary-stop">
        <div className="itinerary-stop-time">13:30-15:00</div>
        <div className="itinerary-stop-content">
          <h4 className="itinerary-stop-name">Trier Amphitheater</h4>
          <p className="itinerary-stop-desc">Watch gladiator shows (summer), run on seating, find dungeon entrances. Highly interactive!</p>
          <p className="itinerary-stop-address">📍 Olewiger Str. 25, 54295 Trier</p>
        </div>
      </div>
      <div className="itinerary-stop">
        <div className="itinerary-stop-time">15:15-16:30</div>
        <div className="itinerary-stop-content">
          <h4 className="itinerary-stop-name">Roman Bridge + Riverside Park</h4>
          <p className="itinerary-stop-desc">Feed pigeons, splash in water, have a picnic. Perfect for relaxing.</p>
          <p className="itinerary-stop-address">📍 Römerbrücke, 54290 Trier</p>
        </div>
      </div>
      <div className="itinerary-stop">
        <div className="itinerary-stop-time">16:45-17:30</div>
        <div className="itinerary-stop-content">
          <h4 className="itinerary-stop-name">Karl Marx House/State Museum (optional)</h4>
          <p className="itinerary-stop-desc">Museum has interactive children's exhibits and Roman artifact models.</p>
          <p className="itinerary-stop-address">📍 Brückenstraße 10 / Weimarer Allee 1, 54290 Trier</p>
        </div>
      </div>
      <div className="itinerary-stop">
        <div className="itinerary-stop-time">18:00-19:30</div>
        <div className="itinerary-stop-content">
          <h4 className="itinerary-stop-name">Dinner: Family-friendly Restaurant at Market Square</h4>
          <p className="itinerary-stop-desc">Choose restaurants with outdoor seating and kids' menus.</p>
          <p className="itinerary-stop-address">📍 Hauptmarkt, 54290 Trier</p>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

function HalfDayContent() {
  const { t } = useTranslation();
  
  return (
    <div className="itinerary-stops">
      <div className="itinerary-day">
        <h3 className="itinerary-day-title">{t('itinerary.halfdayTitle')}</h3>
        <p className="itinerary-day-subtitle">{t('itinerary.halfdaySubtitle')}</p>
        <div className="itinerary-stops">
      <div className="itinerary-stop">
        <div className="itinerary-stop-time">09:00-09:45</div>
        <div className="itinerary-stop-content">
          <h4 className="itinerary-stop-name">Porta Nigra</h4>
          <p className="itinerary-stop-desc">Quick climb to the top for landmark photos.</p>
          <p className="itinerary-stop-address">📍 Simeonstraße 7, 54290 Trier</p>
        </div>
      </div>
      <div className="itinerary-stop">
        <div className="itinerary-stop-time">10:00-10:40</div>
        <div className="itinerary-stop-content">
          <h4 className="itinerary-stop-name">Cathedral & Church of Our Lady</h4>
          <p className="itinerary-stop-desc">Main hall + Holy Robe exhibition, concise visit.</p>
          <p className="itinerary-stop-address">📍 Domfreihof 1, 54290 Trier</p>
        </div>
      </div>
      <div className="itinerary-stop">
        <div className="itinerary-stop-time">10:50-11:20</div>
        <div className="itinerary-stop-content">
          <h4 className="itinerary-stop-name">Basilica of Constantine</h4>
          <p className="itinerary-stop-desc">Quick exterior + interior tour to feel the space grandeur.</p>
          <p className="itinerary-stop-address">📍 Konstantinplatz 10, 54290 Trier</p>
        </div>
      </div>
      <div className="itinerary-stop">
        <div className="itinerary-stop-time">11:30-12:15</div>
        <div className="itinerary-stop-content">
          <h4 className="itinerary-stop-name">Imperial Baths</h4>
          <p className="itinerary-stop-desc">See main baths and underground structures without deep exploration.</p>
          <p className="itinerary-stop-address">📍 Weberbach 41, 54290 Trier</p>
        </div>
      </div>
      <div className="itinerary-stop">
        <div className="itinerary-stop-time">12:20-13:00</div>
        <div className="itinerary-stop-content">
          <h4 className="itinerary-stop-name">Lunch/Quick Bite at Market Square</h4>
          <p className="itinerary-stop-desc">Square bakery and snack stands for quick refueling.</p>
          <p className="itinerary-stop-address">📍 Hauptmarkt, 54290 Trier</p>
        </div>
      </div>
      <div className="itinerary-stop">
        <div className="itinerary-stop-time">13:10-13:30</div>
        <div className="itinerary-stop-content">
          <h4 className="itinerary-stop-name">Roman Bridge Viewing (optional)</h4>
          <p className="itinerary-stop-desc">10-minute walk to see the ancient Roman stone bridge before returning.</p>
          <p className="itinerary-stop-address">📍 Römerbrücke, 54290 Trier</p>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

function GeneralTips() {
  const { t } = useTranslation();
  
  return (
    <div className="itinerary-tips">
      <h3 className="itinerary-tips-title">{t('itinerary.generalTips.title')}</h3>
      <ul className="itinerary-tips-list">
        <li className="itinerary-tip">{t('itinerary.generalTips.tips.0')}</li>
        <li className="itinerary-tip">{t('itinerary.generalTips.tips.1')}</li>
        <li className="itinerary-tip">{t('itinerary.generalTips.tips.2')}</li>
        <li className="itinerary-tip">{t('itinerary.generalTips.tips.3')}</li>
        <li className="itinerary-tip">{t('itinerary.generalTips.tips.4')}</li>
        <li className="itinerary-tip">{t('itinerary.generalTips.tips.5')}</li>
      </ul>
    </div>
  );
}