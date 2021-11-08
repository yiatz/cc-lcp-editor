const activationTypes = [
  { value: 'Move', desc: 'Move' },
  { value: 'Free', desc: 'Free Action' },
  { value: 'Protocol', desc: 'Protocol' },
  { value: 'Quick', desc: 'Quick Action' },
  { value: 'Full', desc: 'Full Action' },
  { value: 'Invade', desc: 'Invasion Option' },
  { value: 'Full Tech', desc: 'Full Tech Action' },
  { value: 'Quick Tech', desc: 'Quick Tech Action' },
  { value: 'Reaction', desc: 'Reaction' },
  { value: 'Other', desc: 'Other / Unsorted Action' },
  { value: 'Downtime', desc: 'Downtime Action' },
]

const synergyLocations = [
  {
    value: 'active_effects',
    desc: 'The Active Effects panel near the top of the Active Mode view',
  },
  { value: 'rest', desc: 'A panel near the top of the Active Mode: Rest view' },
  {
    value: 'weapon',
    desc: 'The body of the equipped weapon item panel in a loadout, as well as in the Skirmish / Barrage action modals',
  },
  {
    value: 'system',
    desc: 'The body of the equipped system item panel in a loadout, as well as in the Activation Action modals',
  },
  { value: 'deployable', desc: 'Deployment action for deployable, deployable panel body' },
  { value: 'drone', desc: 'Deployment action for drone, drone panel body' },
  { value: 'move', desc: 'Next to the move pip bar, also within the Move menu / move Action tab' },
  { value: 'boost', desc: 'Next to the Boost button, within the Boost Action modal' },
  { value: 'structure', desc: 'Next to the structure pip tracker in the Active Mode: Combat view' },
  { value: 'armor', desc: 'Next to the armor pip tracker in the Active Mode: Combat view' },
  { value: 'hp', desc: 'Next to the HP pip tracker in the Active Mode: Combat view' },
  {
    value: 'overshield',
    desc: 'Next to the overshield pip tracker in the Active Mode: Combat view',
  },
  {
    value: 'stress',
    desc: 'Next to the reactor stress pip tracker in the Active Mode: Combat view',
  },
  { value: 'heat', desc: 'Next to the heat pip tracker in the Active Mode: Combat view' },
  {
    value: 'repair',
    desc: 'Next to the repair capacity pip tracker in the Active Mode: Combat view',
  },
  {
    value: 'core_power',
    desc: 'Next to the CORE power pip tracker in the Active Mode: Combat view',
  },
  {
    value: 'overcharge',
    desc: 'Next to the overcharge pip tracker in the Active Mode: Combat view',
  },
  { value: 'dismount', desc: 'Dismount Action modal' },
  { value: 'quick_activation', desc: 'Quick System Action modal' },
  { value: 'full_activation', desc: 'Full System Action modal' },
  { value: 'stabilize', desc: 'Stabilize Action modal' },
  { value: 'barrage', desc: 'Barrage Action modal' },
  { value: 'reload', desc: 'Reload Action modal' },
  { value: 'shut_down', desc: 'Shut Down Action modal' },
  { value: 'prepare', desc: 'Prepare Action modal' },
  { value: 'eject', desc: 'Eject Action modal' },
  { value: 'hide', desc: 'Hide Action modal' },
  { value: 'bolster', desc: 'Bolster Action modal' },
  { value: 'ram', desc: 'Ram Action modal' },
  { value: 'grapple', desc: 'Grapple Action modal' },
  { value: 'tech_attack', desc: 'Tech Attack Action modal' },
  { value: 'quick_tech', desc: 'Quick Tech Action modal' },
  { value: 'overcharge', desc: 'Overcharge Action modal' },
  { value: 'skill_check', desc: 'Skill Check Action modal' },
  { value: 'overwatch', desc: 'Overwatch Action modal' },
  { value: 'improvised_attack', desc: 'Improvised Attack Action modal' },
  { value: 'disengage', desc: 'Disengage Action modal' },
  { value: 'dismount', desc: 'Dismount Action modal' },
  { value: 'stabilize', desc: 'Stabilize Action modal' },
  { value: 'tech', desc: 'Quick and Full Tech Attack modals' },
  { value: 'lock_on', desc: 'Lock On Action modal' },
  { value: 'scan', desc: 'Scan Action modal' },
  { value: 'hull', desc: 'mouseover tooltip for HULL stat' },
  { value: 'agility', desc: 'mouseover tooltip for AGILITY stat' },
  { value: 'systems', desc: 'mouseover tooltip for SYSTEMS stat' },
  { value: 'engineering', desc: 'mouseover tooltip for ENGINEERING stat' },
  { value: 'pilot_weapon', desc: 'Pilot Weapon panel and action modal' },
  { value: 'cascade', desc: 'Cascade warning panel' },
]

const npcSynergyLocations = [
  {
    value: 'todo',
    desc: 'todo',
  },
]

const bonuses = [
  { value: 'skill_point', desc: 'Add Pilot Skill Trigger point', type: 'integer' },
  { value: 'mech_skill_point', desc: 'Add Mech Skill(HASE) point', type: 'integer' },
  { value: 'talent_point', desc: 'Add Pilot Talent point', type: 'integer' },
  { value: 'license_point', desc: 'Add Pilot License point', type: 'integer' },
  { value: 'cb_point', desc: 'Add Pilot CORE Bonus point', type: 'integer' },
  { value: 'range', desc: 'Add Range (including Threat) to weapons', type: 'integer' },
  { value: 'damage', desc: 'Add Damage to weapons', type: 'integer' },
  { value: 'hp', desc: 'Add Mech HP', type: 'integer' },
  { value: 'armor', desc: 'Add Mech Armor', type: 'integer' },
  { value: 'structure', desc: 'Add Mech Structure', type: 'integer' },
  { value: 'stress', desc: 'Add Mech Reactor Stress', type: 'integer' },
  { value: 'heatcap', desc: 'Add Mech Heat Capacity', type: 'integer' },
  { value: 'repcap', desc: 'Add Mech Repair Capacity', type: 'integer' },
  { value: 'speed', desc: 'Add Mech Speed', type: 'integer' },
  { value: 'evasion', desc: 'Add Mech Evasion', type: 'integer' },
  { value: 'edef', desc: 'Add Mech E - Defense', type: 'integer' },
  { value: 'sensor', desc: 'Add Mech Sensor Range', type: 'integer' },
  { value: 'attack', desc: 'Add Mech Attack Bonus', type: 'integer' },
  { value: 'tech_attack', desc: 'Add Mech Tech Attack', type: 'integer' },
  { value: 'grapple', desc: 'Add Mech Grapple Value', type: 'integer' },
  { value: 'ram', desc: 'Add Mech Ram Value', type: 'integer' },
  { value: 'save', desc: 'Add Mech Save', type: 'integer' },
  { value: 'sp', desc: 'Add Mech SP', type: 'integer' },
  { value: 'size', desc: 'Add Mech Size', type: 'integer' },
  { value: 'ai_cap', desc: 'Add AI Capacity', type: 'integer' },
  { value: 'cheap_struct', desc: 'Half cost for Structure repairs', type: 'boolean' },
  { value: 'cheap_stress', desc: 'Half cost for Reactor Stress repairs', type: 'boolean' },
  { value: 'overcharge', desc: 'Overcharge Track', type: 'string' },
  { value: 'limited_bonus', desc: 'Add Limited equipment uses', type: 'integer' },
  { value: 'pilot_hp', desc: 'Add Pilot HP', type: 'integer' },
  { value: 'pilot_armor', desc: 'Add Pilot Armor', type: 'integer' },
  { value: 'pilot_evasion', desc: 'Add Pilot Evasion', type: 'integer' },
  { value: 'pilot_edef', desc: 'Add Pilot E - Defense', type: 'integer' },
  { value: 'pilot_speed', desc: 'Add Pilot Speed', type: 'integer' },
  { value: 'deployable_hp', desc: 'Add HP to all deployed Deployables', type: 'integer' },
  { value: 'deployable_size', desc: 'Add size to all deployed Deployables', type: 'integer' },
  { value: 'deployable_charges', desc: 'Add charges to all deployed Deployables', type: 'integer' },
  { value: 'deployable_armor', desc: 'Add armor to all deployed Deployables', type: 'integer' },
  { value: 'deployable_evasion', desc: 'Add evasion to all deployed Deployables', type: 'integer' },
  { value: 'deployable_edef', desc: 'Add edef to all deployed Deployables', type: 'integer' },
  { value: 'deployable_heatcap', desc: 'Add heatcap to all deployed Deployables', type: 'integer' },
  { value: 'deployable_repcap', desc: 'Add repcap to all deployed Deployables', type: 'integer' },
  {
    value: 'deployable_sensor_range',
    desc: 'Add sensor range to all deployed Deployables',
    type: 'integer',
  },
  {
    value: 'deployable_tech_attack',
    desc: 'Add tech attack to all deployed Deployables',
    type: 'integer',
  },
  { value: 'deployable_save', desc: 'Add save to all deployed Deployables', type: 'integer' },
  { value: 'deployable_speed', desc: 'Add speed to all deployed Deployables', type: 'integer' },
  { value: 'drone_hp', desc: 'Add HP to all deployed Drones', type: 'integer' },
  { value: 'drone_size', desc: 'Add size to all deployed Drones', type: 'integer' },
  { value: 'drone_charges', desc: 'Add charges to all deployed Drones', type: 'integer' },
  { value: 'drone_armor', desc: 'Add armor to all deployed Drones', type: 'integer' },
  { value: 'drone_evasion', desc: 'Add evasion to all deployed Drones', type: 'integer' },
  { value: 'drone_edef', desc: 'Add edef to all deployed Drones', type: 'integer' },
  { value: 'drone_heatcap', desc: 'Add heatcap to all deployed Drones', type: 'integer' },
  { value: 'drone_repcap', desc: 'Add repcap to all deployed Drones', type: 'integer' },
  { value: 'drone_sensor_range', desc: 'Add sensor range to all deployed Drones', type: 'integer' },
  { value: 'drone_tech_attack', desc: 'Add tech attack to all deployed Drones', type: 'integer' },
  { value: 'drone_save', desc: 'Add save to all deployed Drones', type: 'integer' },
  { value: 'drone_speed', desc: 'Add speed to all deployed Drones', type: 'integer' },
]

const npcBonuses = [
  { value: 'todo', desc: 'todo', type: 'integer' },
]

const systemType = [
  'AI',
  'Deployable',
  'Drone',
  'Flight',
  'Shield',
  'System',
  'Tech',
]

const mountType = [
  'Main',
  'Main/Aux',
  'Aux/Aux',
  'Heavy',
  'Flex',
  'Integrated',
]

const weaponType = ['Rifle', 'Cannon', 'Launcher', 'CQB', 'Nexus', 'Melee']

const weaponSize = ['Auxiliary', 'Main', 'Heavy', 'Superheavy']

const rangeType = [
  'Range',
  'Threat',
  'Thrown',
  'Line',
  'Cone',
  'Blast',
  'Burst',
]

const damageType = [
  'Kinetic',
  'Energy',
  'Explosive',
  'Heat',
  'Burn',
  'Variable',
]

const mechType = [
  'Balanced',
  'Artillery',
  'Striker',
  'Controller',
  'Support',
  'Defender',
]

const npcRole = [
  'Striker',
  'Artillery',
  'Controller',
  'Support',
  'Tank',
  'Defender',
]

export { activationTypes, synergyLocations, npcSynergyLocations, bonuses, npcBonuses, systemType, mountType, weaponType, weaponSize, rangeType, damageType, mechType, npcRole }
