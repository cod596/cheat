import { useState } from 'react';

interface CheatOption {
  label: string;
  value: boolean;
}

const FreeFireCheat = () => {
  const [cheatOptions, setCheatOptions] = useState<CheatOption[]>([
    { label: 'Aimbot', value: false },
    { label: 'Wallhack', value: false },
    { label: 'Infinite Health', value: false },
    { label: 'Infinite Ammo', value: false },
    { label: 'Speed Hack', value: false },
  ]);

  const handleToggleCheat = (index: number) => {
    setCheatOptions(
      cheatOptions.map((option, i) =>
        i === index ? { ...option, value: !option.value } : option
      )
    );
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-4">Free Fire Cheat</h2>
      <ul>
        {cheatOptions.map((option, index) => (
          <li key={index} className="flex items-center justify-between mb-2">
            <span className="text-gray-700">{option.label}</span>
            <input
              type="checkbox"
              checked={option.value}
              onChange={() => handleToggleCheat(index)}
              className="ml-2"
            />
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => alert('Cheat activated!')}
      >
        Activate Cheat
      </button>
    </div>
  );
};

export default FreeFireCheat;